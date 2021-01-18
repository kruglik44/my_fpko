import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router) {}

  openWeapon(){
    this.router.navigate(['tabs/tab1/weapon-list']);
  }
  openDocuments(){
    this.router.navigate(['tabs/tab1/document-list']);
  }
}
