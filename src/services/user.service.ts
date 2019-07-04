import {User} from '../app/models/user.model';
import {Subject} from 'rxjs';

export class UserService {


  private users: User[] = [{
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@admin.fr',
    gender: 'male',
    hobbies: ['foot', 'cinema']
  }];
  usersSubject = new Subject<User[]>();

  emitUsers() {
    this.usersSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
}

}
