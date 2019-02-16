import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-family-modal',
  templateUrl: './family-modal.component.html',
  styleUrls: ['./family-modal.component.scss']
})
export class FamilyModalComponent implements OnInit {

  // "value" passed in componentProps
  @Input() value: string;

  constructor(navParams: NavParams, public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit() {
  }

  async familyModal(name) {
    console.log("openModal");
    const modal = await this.modalController.create({
      component: FamilyModalComponent,
      componentProps: { value: name }
    });
    return await modal.present();
  }

  dismissModal(){
    this.modalController.dismiss({
      'result': this.value
    })
  }

  

}