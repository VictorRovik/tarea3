import { Component, OnInit } from '@angular/core';
import { SegmentPageModule } from './segment.module';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event:any){
    console.log(event);
  }

}
