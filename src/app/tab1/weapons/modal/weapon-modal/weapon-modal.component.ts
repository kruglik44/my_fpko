import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-weapon-modal',
  templateUrl: './weapon-modal.component.html',
  styleUrls: ['./weapon-modal.component.scss'],
})
export class WeaponModalComponent implements OnInit {
  slotToShow: string = "common";
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  @Input() weapon: Object;

  async close(){
    await this.modalController.dismiss();
  }
  segmentChanged(ev: any) {
    this.slotToShow = ev.detail.value;
    console.log(this.slotToShow);
  }
}
