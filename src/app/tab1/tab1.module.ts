import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { WeaponComponent } from './weapons/weapon/weapon.component';
import { WeaponModalComponent } from './weapons/modal/weapon-modal/weapon-modal.component';
import { DocumentComponent } from './documents/document/document.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, WeaponComponent, WeaponModalComponent, DocumentComponent]
})
export class Tab1PageModule {}
