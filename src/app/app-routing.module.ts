import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfouserComponent} from './tachemanage/infouser.component';
import {CommentairesComponent} from './commentaires/commentaires.component';
import {AuthComponent} from './auth/auth.component';
import {TacheDetailComponent} from './tache-detail/tache-detail.component';
import {PageinconnueComponent} from './pageinconnue/pageinconnue.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';

const routes: Routes = [
  {path: 'tachemanage', canActivate: [AuthGuardService], component: InfouserComponent},
  {path: 'users', component: UserListComponent},
  {path: 'newUser', component: NewUserComponent},
  {path: 'comments', component: CommentairesComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'tachemanage/:id', canActivate: [AuthGuardService], component: TacheDetailComponent},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'not_found', component: PageinconnueComponent},
  {path: '**', redirectTo: '/not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
