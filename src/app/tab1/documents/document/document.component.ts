import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
  slotToShow: string = "docs";
  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['tabs/tab1']);
  }

  segmentChanged(ev: any) {
    this.slotToShow = ev.detail.value;
    console.log(this.slotToShow);
  }

  ngOnInit() {}

}
