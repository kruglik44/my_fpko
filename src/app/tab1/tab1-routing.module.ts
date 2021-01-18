import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './documents/document/document.component';
import { Tab1Page } from './tab1.page';
import { WeaponComponent } from './weapons/weapon/weapon.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'weapon-list',
    component: WeaponComponent
  },
  {
    path: 'document-list',
    component: DocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
