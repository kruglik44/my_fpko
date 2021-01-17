import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WeaponModalComponent } from '../modal/weapon-modal/weapon-modal.component';
@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent implements OnInit {

  constructor(public router: Router,
              public modalController: ModalController) { }

  ngOnInit() {}
  goBack(){
    this.router.navigate(['tabs/tab1']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: WeaponModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'weapon': {
          name: 'АК-47',
          series: 'ДОО',
          number: '42334',
          type: 'Автомат',
          productionYear: '2011'
        },
      }
    });
    modal.onDidDismiss()
    .then((data) => {
      const user = data; // Here's your selected user!
      console.log(user);
  });
    return await modal.present();
  }
}
