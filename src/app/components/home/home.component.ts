import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxe } from '../../classe/boxe';
import boxes from 'src/assets/boxes/boxes.json';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isModalActive: boolean = false;
  plateaux: Boxe[] = [];
  boxe: any = [];
  faStar=faStar;

  public form: FormGroup;
  rating: number;

  constructor(private fb: FormBuilder){
    this.rating = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.plateaux = boxes;
  }

  toggleModal(boxes: Boxe) {
    this.isModalActive = !this.isModalActive;
    this.boxe = this.plateaux[boxes['id']!-1];
  }

  onClose() { this.isModalActive = !this.isModalActive;}
}
