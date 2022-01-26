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


//   this.plateaux = [{

//     "id": 1,

//     "nom": "Tasty Blend",

//     "pieces": 12,

//     "composition": [

//       { "nom": "California Saumon Avocat", "quantite": 3 },

//       { "nom": "Sushi Saumon", "quantite": 3 },

//       { "nom": "Spring Avocat Cheese", "quantite": 3 },

//       { "nom": "California pacific", "quantite": 3 },

//       { "nom": "Edamame/Salade de chou", "quantite": 1 }

//     ],

//     "saveurs": ["saumon", "avocat", "cheese"],

//     "prix": 12.50,

//     "image": "tasty-blend"

//   },

//   {

//     "id": 2,

//     "nom": "Amateur Mix",

//     "pieces": 18,

//     "composition": [

//       { "nom": "Maki Salmon Roll", "quantite": 3 },

//       { "nom": "Spring Saumon Avocat", "quantite": 3 },

//       { "nom": "Maki Cheese Avocat", "quantite": 6 },

//       { "nom": "California Saumon Avocat", "quantite": 3 },

//       { "nom": "Edamame/Salade de chou", "quantite": 1 }

//     ],

//     "saveurs": ["coriandre", "saumon", "avocat", "cheese"],

//     "prix": 15.90,

//     "image": "amateur-mix"

//   },

//   {

//     "id": 3,

//     "nom": "Saumon Original",

//     "pieces": 11,

//     "composition": [

//       { "nom": "California Saumon Avocat", "quantite": 6 },

//       { "nom": "Sushi Saumon", "quantite": 5 },

//       { "nom": "Edamame/Salade de chou", "quantite": 1 }

//     ],

//     "saveurs": ["saumon", "avocat"],

//     "prix": 12.50,

//     "image": "salmon-original"

//   }];

  }
}
