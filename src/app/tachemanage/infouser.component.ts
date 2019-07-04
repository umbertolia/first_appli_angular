import {Component, OnInit} from '@angular/core';
import {InfoUserService} from '../../services/infouser.service';
import {Subscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';


@Component({
    selector: '[app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {
  infos: any;
  infosSubscription: Subscription;
  listeTaches = [];
  tachesSubscription: Subscription;
  nouvelleTache ={dateTache:new Date(), nomTache: 'NomTache', nomResponsable: 'NomResp'};

  // simule le fait d'aller recuperer la donnee ailleurs (ajout d'un timeout) ) afin d'utiliser le pipe async
  derniereMAJ = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 3000);
    })

  constructor(private infoUserService: InfoUserService) {

  }

  ngOnInit() {
    this.infosSubscription = this.infoUserService.infosSubject.subscribe(
      (infos: any) => {
        this.infos = infos;
      }
    );
    this.tachesSubscription = this.infoUserService.tachesSubject.subscribe(
      taches => {
        this.listeTaches = taches;
      }
    );

    this.infoUserService.emitInfosSubject();
    this.infoUserService.emitTachesSubject();
  }

  onAjouterTache(form: NgForm) {
    this.infoUserService.ajouterTache(form.value);
    this.nouvelleTache.nomTache = '';
    this.nouvelleTache.nomResponsable = '';
  }

  onFormatterLigneTache(nomResp) {
    return this.infoUserService.getLibelle(nomResp);
  }

  enleverTache(index) {
    this.infoUserService.enleverTache(index);
  }

  fetchTaches() {
    this.infoUserService.recupererTachesDepuisDataBase();
  }

  persistTaches() {
    this.infoUserService.envoyerTachesVersDataBase();
  }

}
