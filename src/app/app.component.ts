import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable, Subscription} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy{
  title = 'Tache Manager Angular';
  menuActif = false;
  afficherTitre = true;

  secondes: number;
  counterSubscription: Subscription;

  constructor(private authService: AuthService) {
    setTimeout (() => {
      this.menuActif = true;
    }, 3000);
  }


  getTitleColor() {
    if (!this.menuActif) {
      return 'red';
    } else { return 'green'; }
  }

  estAuthentifie() {
    return this.authService.isAuth;
  }

  ngOnInit(): void {
    const compteur = Observable.interval(1000);
    this.counterSubscription = compteur.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

}
