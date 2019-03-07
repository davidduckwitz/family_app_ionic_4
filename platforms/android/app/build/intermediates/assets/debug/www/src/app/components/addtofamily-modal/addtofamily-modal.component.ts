import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-addtofamily-modal',
  templateUrl: './addtofamily-modal.component.html',
  styleUrls: ['./addtofamily-modal.component.scss']
})
export class AddtofamilyModalComponent implements OnInit {
  @Input() family_id: number;
  constructor(public alertController: AlertController, public modalController: ModalController, private familyService: FamilyService) { }

  ngOnInit() {
  }

  async addToFamilyModal(family_id) {
    const modal = await this.modalController.create({
      component: AddtofamilyModalComponent,
      componentProps: { family_id: family_id }
    });
    return await modal.present();
  }

  addToFamily(firstname: string, lastname: string, email: string) {
    this.familyService.addToFamily(firstname, lastname, email, this.family_id).subscribe(response => {
      // dismissModal
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

  dismissModal() {
    this.modalController.dismiss({
      'result': this.family_id
    });
  }

}
