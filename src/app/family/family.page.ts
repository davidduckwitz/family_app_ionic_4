import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FamilyModalComponent } from '../components/family-modal/family-modal.component';
import { AddtofamilyModalComponent } from '../components/addtofamily-modal/addtofamily-modal.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FamilyService } from '../services/family.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {
  Mylocation: any = 'Hier kommt die Position';
  SelectedFamily: number = 0;;
  family: any = [];
  familymembers: any = [];
  newMember: any;
  user: any = {
    name: "",
    email: "",
    picture: "",
    userid: 2
  }

  constructor(public modalController: ModalController,
    public alertController:AlertController,
    private geolocation: Geolocation,
    private familyService: FamilyService,
    private nativeStorage: NativeStorage) {}

  ngOnInit() {
    this.nativeStorage.getItem('user')
      .then(data => {
        this.user = {
          name: data.name,
          email: data.email,
          picture: data.picture,
          userid: data.userid
        };
      }, error =>{
        console.log(error);
      });      
      this.loadFamily(this.user.userid);      
  }

  addFamilyCode(hash: string){
    this.familyService.addTamilyByHash(hash, this.user.userid).subscribe(response => {
      this.loadFamily(this.user.userid);
    }, error => {
          console.log(error.status);
          this.presentAlert('Success', error.status);
    });
  }

  loadFamily(id: number){
    this.familyService.getFamilysByUserId(id).subscribe(response => {
      this.family = response;
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

  loadFamilyMembers(id:number){
    this.SelectedFamily = id;
    this.familyService.getFamilymembersByUserId(id).subscribe(response => {
      this.familymembers = response;
    }, error => {
          console.log(error.status);
          this.presentAlert('Success', error.status);
    });
  }

  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.Mylocation = 'lat' + resp.coords.latitude + '- long' + resp.coords.longitude;
      console.log('lat' + resp.coords.latitude + '- long' + resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  openModal(value:any){
    this.familyModal(value);
  }

  openAddMemberModal(id: number){
    this.addToFamilyModal(id);
  }


  async familyModal(value:any) {
    console.log('openModal');
    const modal = await this.modalController.create({
      component: FamilyModalComponent,
      componentProps: { value: value }
    });

    return await modal.present();
  }

  async addToFamilyModal(id: number) {
    console.log('openModal');
    const modal = await this.modalController.create({
      component: AddtofamilyModalComponent,
      componentProps: { family_id: id }
    });
    return await modal.present();
  }

}
