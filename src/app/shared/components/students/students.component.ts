import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../models/students';
import { studData } from '../../consts/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studArr: Array<Istudent> = studData;
  isInEditMode: boolean = false;
  editObj!: Istudent;

  @ViewChild('fnameControl') fnameControl!: ElementRef;
  @ViewChild('lnameControl') lnameControl!: ElementRef;
  @ViewChild('emailControl') emailControl!: ElementRef;
  @ViewChild('contactControl') contactControl!: ElementRef;

  onAddStudent(ele1:HTMLInputElement,ele2:HTMLInputElement,ele3:HTMLInputElement,ele4:HTMLInputElement) {
    let val1 = ele1.value;
    let val2 = ele2.value;
    let val3 = ele3.value;
    let val4 = ele4.value;
    if(val1.length > 0 && val2.length && val3.length && val4.length){
      let newStud: Istudent = {
      fname: this.fnameControl.nativeElement.value,
      lname: this.lnameControl.nativeElement.value,
      email: this.emailControl.nativeElement.value,
      contact: this.contactControl.nativeElement.value,
      stdID: Date.now.toString()
    }
    this.studArr.push(newStud);
    }
  }

  onRemove(id: string){
    let getIndex = this.studArr.findIndex(t => t.stdID === id)
    this.studArr.splice(getIndex,1);
  }

  onEditStd(ele: Istudent) {
    this.fnameControl.nativeElement.value = ele.fname;
    this.lnameControl.nativeElement.value = ele.lname;
    this.emailControl.nativeElement.value = ele.email;
    this.contactControl.nativeElement.value = ele.contact;
    this.isInEditMode = true;
    this.editObj = ele;
  }

  onUpdateStudent() {
    let updateID = this.editObj.stdID;
    let updatedStd: Istudent = {
      fname: this.fnameControl.nativeElement.value,
      lname: this.lnameControl.nativeElement.value,
      email: this.emailControl.nativeElement.value,
      contact: this.contactControl.nativeElement.value,
      stdID: updateID
    }
    let getIndex = this.studArr.findIndex(t => t.stdID === updateID);
    this.studArr[getIndex] = updatedStd;
    this.fnameControl.nativeElement.value = '';
    this.lnameControl.nativeElement.value = '';
    this.emailControl.nativeElement.value = '';
    this.contactControl.nativeElement.value = '';
    this.isInEditMode = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

  trackByFun(index: number, std: Istudent) {
    return std.stdID;
  }
}
