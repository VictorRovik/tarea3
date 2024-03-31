import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data=[
    {
      name:'Primario',
      select:false
    },
    {
      name:'Segundario',
      select:true
    },
    {
      name:'Terciario',
      select:false
    },
    {
      name:'Exito',
      select:true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

}
