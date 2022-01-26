import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxe } from '../../classe/boxe'
import boxes from 'src/assets/boxes/boxes.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  plateaux: Boxe[] = [];

  constructor() { }

  ngOnInit(): void {
    this.plateaux = boxes;
  }
}
