import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class InfoUserService {

  infosSubject = new Subject<any>();

  tachesSubject = new Subject<any>();

  private infos = {
    userName: 'Umberto',
    userLastName: 'De Amorin',
    userMail: 'umb@free.fr'
  };
  private listeTaches = [
    /* {id: 3, dateTache: new Date(), nomTache: 'Tâche 1', nomResponsable: 'HDN'},
     {id: 1, dateTache: new Date(), nomTache: 'Tâche 2', nomResponsable: ''},
     {id: 5, dateTache: new Date(), nomTache: 'Tâche 3', nomResponsable: 'HDN'}*/
  ];

  constructor(private httpClient: HttpClient) {

  }

  getTacheById(id: number) {
    const tache = this.listeTaches.find(
      (tacheObject) => {
        return tacheObject.id === id;
      }
    );
    return tache;
  }

  ajouterTache(donnees) {
    donnees.dateTache = new Date();

    // tri du tableau par id
    this.listeTaches.sort((a, b) => a.id.toString().localeCompare(b.id.toString()));

    // recherche d'un id libre
    let ref = 1;
    let trouve = false;

    for (let i = 0; i < this.listeTaches.length && !trouve; i++) {
      if (this.listeTaches[i].id === ref) {
        ref++;
      } else {
        trouve = true;
      }
    }
    donnees.id = ref;
    this.listeTaches.push(donnees);
  }

  listerTaches() {
    return this.listeTaches;
  }

  getInfos() {
    return this.infos;
  }

  getLibelle(nomResp) {
    if (nomResp != null && nomResp.length === 0) {
      return 'non attribuée';
    } else {
      return 'attribuée à ' + nomResp;
    }
  }

  enleverTache(idTache: number) {
    let trouve: boolean;
    for (let i = 0; i < this.listeTaches.length && !trouve; i++) {
      if (this.listeTaches[i].id === idTache) {
        this.listeTaches.splice(i, 1);
        trouve = true;
      }
    }
  }

  emitInfosSubject() {
    this.infosSubject.next(this.infos);
  }

  emitTachesSubject() {
    this.tachesSubject.next(this.listeTaches);
  }

  envoyerTachesVersDataBase() {
    this.httpClient.put('https://tachemanager.firebaseio.com//taches.json', this.listeTaches)
      .subscribe(
        () => {

          console.log('Taches sauvegardées');
        },
        error => {
          console.log('Erreur lors de la sauvegarde des taches' + error);
        }
      );
  }

  recupererTachesDepuisDataBase() {
    this.httpClient.get<any[]>('https://tachemanager.firebaseio.com//taches.json')
      .subscribe(response => {
          this.listeTaches = response;
          this.emitTachesSubject();
          console.log('Taches récupérées');
        },
        error => {
          console.log('Erreur lors de la recupération des taches' + error);
        });

  }
}
