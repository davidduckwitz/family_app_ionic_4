import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FamilyModalComponent } from '../components/family-modal/family-modal.component';
import { AddtofamilyModalComponent } from '../components/addtofamily-modal/addtofamily-modal.component';
import { AddfamilyModalComponent } from '../components/addfamily-modal/addfamily-modal.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FamilyService } from '../services/family.service';
import { AuthenticationService } from '../services/authentication.service';
import { TrackingService } from '../services/tracking.service';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {
  Mylocation: any = '';
  SelectedFamily = 0;
  family: any = [];
  inviteCode: string = '';
  familymembers: any = [];
  newMember: any;
  user: any;

  constructor(public modalController: ModalController,
    public alertController: AlertController,
    private geolocation: Geolocation,
    private familyService: FamilyService,
    private authenticationService: AuthenticationService,
    private platform: Platform,
    private trackingService: TrackingService) {}

  ngOnInit() {
      this.user = this.authenticationService.getUser();
      this.loadFamily(this.user.userid);
  }

  async enterFamilyHash() {
    const alert = await this.alertController.create({
      header: 'Family Code',
      inputs: [
        {
          name: 'hash',
          type: 'text',
          placeholder: 'Code'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (code) => {
            console.log('Confirm Ok', code.hash);
            this.addFamilyCode(code.hash);
          }
        }
      ]
    });

    await alert.present();
  }

  addFamilyCode(hash: string) {
    this.familyService.addTamilyByHash(hash, this.user.userid).subscribe(response => {
      
      setTimeout(() => {
        this.loadFamily(this.user.userid);
    }, 2000);
    }, error => {
          console.log(error.status);
          this.presentAlert('Success', error.status);
    });
  }

  loadFamily(id: number) {
    this.familyService.getFamilysByUserId(id).subscribe(response => {
      this.family = response;
      if (response[0].id) {
        this.inviteCode = response[0].hash;
        this.loadFamilyMembers(response[0].id);
      } else {
        this.presentAlert('Success', 'You do not have any Familys yet, Create a Family to start...');
      }
    }, error => {
          console.log(error.status);
          this.presentAlert('Success', error.status);
    });
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
    header: title,
        message: content,
        buttons: ['OK']
      });
      await alert.present();
    }

    onChangeNewfam($event) {
      this.loadFamilyMembers($event.detail.value);
    }

  loadFamilyMembers(id: number) {
    this.SelectedFamily = id;
    this.familyService.getFamilymembersByUserId(id).subscribe(response => {
      this.familymembers = response;
    }, error => {
          console.log(error.status);
          this.presentAlert('Success', error.status);
    });
  }

  openModal(value: any) {
    this.familyModal(value);
  }

  openAddMemberModal(id: number) {
    this.addToFamilyModal(id);
  }


  async familyModal(value: any) {
    const modal = await this.modalController.create({
      component: FamilyModalComponent,
      componentProps: { value: value, currentuserId: this.user.userid }
    });

    return await modal.present();
  }

  async addToFamilyModal(id: number) {
    const modal = await this.modalController.create({
      component: AddtofamilyModalComponent,
      componentProps: { family_id: id }
    });
    modal.onDidDismiss().then((d: any) => {
      this.loadFamily(this.user.userid);
      // this.addToFamilyModal(d);
    });
    return await modal.present();
  }

  async addFamilyModal() {
    const modal = await this.modalController.create({
      component: AddfamilyModalComponent,
      componentProps: { userid: this.user.userid }
    });
    modal.onDidDismiss().then((d: any) => {
      this.loadFamily(this.user.userid);
      // this.addToFamilyModal(d);
    });
    return await modal.present();
  }

}
