import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accident-avk',
  templateUrl: './accident-avk.page.html',
  styleUrls: ['./accident-avk.page.scss'],
})
export class AccidentAvkPage implements OnInit {

  constructor() { }
  listeAccident =[
    "a1",
    "a2",
    "a3",
    "a4",
  ]
  ngOnInit() {
  }

}
