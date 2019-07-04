import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  tablo: {1,2,3,4,};

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      gender: ['male', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;

    const newUser = new User(
      formValue.firstName,
      formValue.lastName,
      formValue.email,
      formValue.gender,
      formValue.hobbies ? formValue.hobbies : []
    );
    this.userService.addUser(newUser);
    this.userService.emitUsers();
    this.router.navigate(['/users']);
  }

  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    // on verifie s'il existe un champ non reneigné avant d'en ajouter un autre
    const hobbiesControls = this.getHobbies().controls;

    let ajoutOK = true;

    for (let i = 0; i < hobbiesControls.length && ajoutOK; i++) {
      if (hobbiesControls[i].value.length === 0) {
        ajoutOK = false;
      }
    }
    if (ajoutOK) {
      this.getHobbies().push(newHobbyControl);
    }
  }

  checkHobbiesForm() {
    const hobbiesControls = this.getHobbies().controls;
    for (let i = 0; i < hobbiesControls.length; i++) {
      if (hobbiesControls[i].value.length === 0 && hobbiesControls.length > 1) {
        this.getHobbies().removeAt(i);
      }
    }

  }
}
