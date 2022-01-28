import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxe } from '../../classe/boxe';
import boxes from 'src/assets/boxes/boxes.json';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isModalActive: boolean = false;
  plateaux: Boxe[] = [];
  boxe: any = [];
  faStar = faStar;
  notesG: number[] = [];


  public form: FormGroup;
  rating: number;

  constructor(private fb: FormBuilder) {
    this.rating = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.plateaux = boxes;
    this.form = new FormGroup({
      rating: new FormControl()
    });
    this.notesG = this.moyenne(this.plateaux);
  }

  toggleModal(boxes: Boxe) {
    this.isModalActive = !this.isModalActive;
    this.boxe = this.plateaux[boxes['id']! - 1];
  }

  onClose(idBoxe: number) {
    this.isModalActive = !this.isModalActive;
    console.log(this.form.value.rating);
    this.notation(idBoxe);
    this.form.reset();
  }

  notation(idBoxe: number) {
    this.plateaux[idBoxe - 1].notes?.push(parseInt(this.form.value.rating));
    this.notesG = this.moyenne(this.plateaux);
  }

  moyenne(boxe: any) {
    let element = 0;
    var notesG = [];
    let result = 0;

    for (let index = 0; index < boxe.length; index++) {
      element = 0;
      for (const note in boxe[index].notes) {
        element += boxe[index].notes[note];
      }
      result = element / boxe[index].notes.length;
      notesG.push(Math.round(result * 100) / 100);

    }
    return notesG;

  }
}
