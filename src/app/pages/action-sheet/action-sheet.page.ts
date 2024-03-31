import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  
  ngOnInit() {
  }

  public actionSheetButtons = [
    {
      text: 'Borrar',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass:'rojo',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartir',
      icon: 'share-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      icon: 'close-outline',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() { }
}

  