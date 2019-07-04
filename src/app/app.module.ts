import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfouserComponent } from './tachemanage/infouser.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InfoUserService} from '../services/infouser.service';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from '../services/auth.service';
import { TacheDetailComponent } from './tache-detail/tache-detail.component';
import { PageinconnueComponent } from './pageinconnue/pageinconnue.component';
import {AuthGuardService} from '../services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from '../services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InfouserComponent,
    CommentairesComponent,
    AuthComponent,
    TacheDetailComponent,
    PageinconnueComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InfoUserService, AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent]


})
export class AppModule  {

}
