import { Component, OnInit } from '@angular/core';
import {InfoUserService} from '../../services/infouser.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tache-detail',
  templateUrl: './tache-detail.component.html',
  styleUrls: ['./tache-detail.component.css']
})
export class TacheDetailComponent implements OnInit {

  taskName: string;
  nomResp: string;
  status: string;
  idTache: string;

  constructor(private tacheService: InfoUserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idTache = this.route.snapshot.params['id'];
    // mettre + pour caster le string en number
    this.taskName = this.tacheService.getTacheById(+this.idTache).nomTache;
    this.nomResp = this.tacheService.getTacheById(+this.idTache).nomResponsable;
  }

  supprimerTache() {
    this.tacheService.enleverTache(Number(this.idTache));
    this.router.navigate(['/tachemanage']);
  }

}
