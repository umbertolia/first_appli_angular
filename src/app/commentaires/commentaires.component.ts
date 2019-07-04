import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  compteur: number;
  valeur: any;

  constructor() {
    this.compteur = 0;
  }

  ngOnInit() {
  }

  ajouter() {
    var num = Number(this.valeur);
    if (num == 0 || isNaN(num)) {
      this.compteur++;
    } else {
      this.compteur = this.compteur + num;
    }
    this.valeur = "";
  }

  diminuer() {
    var num = Number(this.valeur);

    if (num == 0 || isNaN(num)) {
      this.compteur--;
    } else {
      this.compteur = this.compteur - num;
    }
    this.valeur = "";
  }


}
