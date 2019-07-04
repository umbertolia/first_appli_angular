import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {log} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus : boolean;

  constructor(private autentifServ : AuthService, private router:Router) {}

  ngOnInit(): void {

    this.authStatus = this.autentifServ.isAuth;
  }

  onSignIn() {
    this.autentifServ.signIn().then(
      () => {
        log('authentifcation reussie');
        this.router.navigate(['tachemanage'])
        this.authStatus = this.autentifServ.isAuth;
      });
  }

  onSignOut() {
    this.autentifServ.signOut();
    this.authStatus = this.autentifServ.isAuth;
  }

}
