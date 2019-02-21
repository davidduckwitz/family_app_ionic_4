import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-addfamily-modal',
  templateUrl: './addfamily-modal.component.html',
  styleUrls: ['./addfamily-modal.component.scss'],
})
export class AddfamilyModalComponent implements OnInit {
  @Input() userid: number;
  family_id: number;
  constructor(public alertController:AlertController, public modalController: ModalController, private familyService: FamilyService) { }

  ngOnInit() {
  }

  async addFamilyModal() {
    const modal = await this.modalController.create({
      component: AddfamilyModalComponent,
      componentProps: { userid: this.userid }
    });
    return await modal.present();
  }

  addFamily(familyname: string){
    this.familyService.addFamily(familyname, this.userid).subscribe(response => {
      // dismissModal
      if (response['family_id']){
        this.family_id = response['family_id'];
      } else {
        this.presentAlert('ERROR', 'Family Not created');
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

  dismissModal(){
    this.modalController.dismiss(this.family_id);
  }

}
