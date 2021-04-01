import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accident-avk',
  templateUrl: './accident-avk.page.html',
  styleUrls: ['./accident-avk.page.scss'],
})
export class AccidentAvkPage implements OnInit {

  constructor() { }
  listeAccident =[
    "accident1",
    "accident2",
    "accident3",
    "accident4",
  ]
  ngOnInit() {
  }

}
