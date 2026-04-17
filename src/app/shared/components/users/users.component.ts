import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iusers } from '../../models/users';
import { usersData } from '../../consts/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr: Array<Iusers> = usersData;
  isInEditMode: boolean = false;
  editUser!: Iusers;
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('firstNameControl') firstNameControl!: ElementRef;
  @ViewChild('middleNameControl') middleNameControl!: ElementRef;
  @ViewChild('lastNameControl') lastNameControl!: ElementRef;
  @ViewChild('emailControl') emailControl!: ElementRef;
  @ViewChild('usernameControl') usernameControl!: ElementRef;
  @ViewChild('passwordControl') passwordControl!: ElementRef;
  @ViewChild('phoneControl') phoneControl!: ElementRef;
  @ViewChild('ageControl') ageControl!: ElementRef;
  @ViewChild('birthDateControl') birthDateControl!: ElementRef;
  @ViewChild('imageControl') imageControl!: ElementRef;

  onAddUser() {
    let newUser: Iusers = {
      firstName: this.firstNameControl.nativeElement.value,
      middleName: this.middleNameControl.nativeElement.value,
      lastName: this.lastNameControl.nativeElement.value,
      email: this.emailControl.nativeElement.value,
      username: this.usernameControl.nativeElement.value,
      password: this.passwordControl.nativeElement.value,
      phone: this.phoneControl.nativeElement.value,
      age: this.ageControl.nativeElement.value,
      birthDate: this.birthDateControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      userID: Date.now.toString()
    }
    this.usersArr.unshift(newUser);
    this.firstNameControl.nativeElement.value = '';
    this.middleNameControl.nativeElement.value = '';
    this.lastNameControl.nativeElement.value = '';
    this.emailControl.nativeElement.value = '';
    this.usernameControl.nativeElement.value = '';
    this.passwordControl.nativeElement.value = '';
    this.phoneControl.nativeElement.value = '';
    this.ageControl.nativeElement.value = '';
    this.birthDateControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
  }

  onRemove(id: string) {
    let getIndex = this.usersArr.findIndex(u => u.userID === id);
    this.usersArr.splice(getIndex, 1);
  }

  onEdit(user: Iusers) {
    this.firstNameControl.nativeElement.value = user.firstName;
    this.middleNameControl.nativeElement.value = user.lastName;
    this.lastNameControl.nativeElement.value = user.lastName;
    this.emailControl.nativeElement.value = user.email;
    this.usernameControl.nativeElement.value = user.username;
    this.passwordControl.nativeElement.value = user.password;
    this.phoneControl.nativeElement.value = user.phone;
    this.ageControl.nativeElement.value = user.age;
    this.birthDateControl.nativeElement.value = user.birthDate;
    this.imageControl.nativeElement.value = user.image;
    this.isInEditMode = true;
    this.editUser = user;
  }

  onUpdateUser() {
    let UPDATE_ID = this.editUser.userID;
    let UPDATED_USER: Iusers = {
      firstName: this.firstNameControl.nativeElement.value,
      middleName: this.middleNameControl.nativeElement.value,
      lastName: this.lastNameControl.nativeElement.value,
      email: this.emailControl.nativeElement.value,
      username: this.usernameControl.nativeElement.value,
      password: this.passwordControl.nativeElement.value,
      phone: this.phoneControl.nativeElement.value,
      age: this.ageControl.nativeElement.value,
      birthDate: this.birthDateControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      userID: UPDATE_ID
    }
    let getIndex = this.usersArr.findIndex(u => u.userID === UPDATE_ID);
    this.usersArr[getIndex] = UPDATED_USER;
    this.firstNameControl.nativeElement.value = '';
    this.middleNameControl.nativeElement.value = '';
    this.lastNameControl.nativeElement.value = '';
    this.emailControl.nativeElement.value = '';
    this.usernameControl.nativeElement.value = '';
    this.passwordControl.nativeElement.value = '';
    this.phoneControl.nativeElement.value = '';
    this.ageControl.nativeElement.value = '';
    this.birthDateControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
    this.isInEditMode = false;
  }

  trackByFun(index: number, user: Iusers) {
    return user.userID;
  }

}
