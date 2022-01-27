import { Component, OnInit } from '@angular/core';
import { Boxe } from 'src/app/classe/boxe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isModalActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(boxes: Boxe) {
    console.log(boxes);
    this.isModalActive = !this.isModalActive;
    
  }

  onClose() { this.isModalActive = !this.isModalActive;}
}
