import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxe } from '../../classe/boxe';
import boxes from 'src/assets/boxes/boxes.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isModalActive: boolean = false;
  plateaux: Boxe[] = [];
  boxe: any = [];

  ngOnInit(): void {
    this.plateaux = boxes;
  }

  toggleModal(boxes: Boxe) {
    console.log(boxes['id']);
    console.log(this.plateaux[boxes['id']!-1]);
    this.isModalActive = !this.isModalActive;
    this.boxe = this.plateaux[boxes['id']!-1];
  }

  onClose() { this.isModalActive = !this.isModalActive;}
}
