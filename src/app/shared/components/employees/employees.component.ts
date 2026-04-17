import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iemployee } from '../../models/employees';
import { employeesData } from '../../consts/employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeesArr: Array<Iemployee> = employeesData
  isInEditMode: boolean = false;
  editEmployee!: Iemployee;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('nameControl') nameControl!: ElementRef
  @ViewChild('emailControl') emailControl!: ElementRef
  @ViewChild('phoneControl') phoneControl!: ElementRef
  @ViewChild('ageControl') ageControl!: ElementRef
  @ViewChild('cityControl') cityControl!: ElementRef
  @ViewChild('salaryControl') salaryControl!: ElementRef
  @ViewChild('positionControl') positionControl!: ElementRef
  @ViewChild('departmentControl') departmentControl!: ElementRef
  @ViewChild('genderControl') genderControl!: ElementRef
  @ViewChild('isActiveControl') isActiveControl!: ElementRef
  @ViewChild('joiningDateControl') joiningDateControl!: ElementRef
  onAddEmployee() {
    let newEmployee: Iemployee = {
      name: this.nameControl.nativeElement.value,
      email: this.emailControl.nativeElement.value,
      phone: this.phoneControl.nativeElement.value,
      age: this.ageControl.nativeElement.value,
      city: this.cityControl.nativeElement.value,
      salary: this.salaryControl.nativeElement.value,
      position: this.positionControl.nativeElement.value,
      department: this.departmentControl.nativeElement.value,
      gender: this.genderControl.nativeElement.value,
      isActive: this.isActiveControl.nativeElement.value,
      joiningDate: this.joiningDateControl.nativeElement.value,
      employeeID: Date.now()
    }
    this.employeesArr.unshift(newEmployee);
    this.nameControl.nativeElement.value = '';
    this.emailControl.nativeElement.value = '';
    this.phoneControl.nativeElement.value = '';
    this.ageControl.nativeElement.value = '';
    this.cityControl.nativeElement.value = '';
    this.salaryControl.nativeElement.value = '';
    this.positionControl.nativeElement.value = '';
    this.departmentControl.nativeElement.value = '';
    this.genderControl.nativeElement.value = '';
    this.isActiveControl.nativeElement.value = '';
    this.joiningDateControl.nativeElement.value = '';
  }

  onRemove(id: number) {
    let getIndex = this.employeesArr.findIndex(e => e.employeeID === id);
    this.employeesArr.splice(getIndex, 1);
  }

  onEdit(employee: Iemployee) {
    this.nameControl.nativeElement.value = employee.name;
    this.emailControl.nativeElement.value = employee.email;
    this.phoneControl.nativeElement.value = employee.phone;
    this.ageControl.nativeElement.value = employee.age;
    this.cityControl.nativeElement.value = employee.city;
    this.salaryControl.nativeElement.value = employee.salary;
    this.positionControl.nativeElement.value = employee.position;
    this.departmentControl.nativeElement.value = employee.department;
    this.genderControl.nativeElement.value = employee.gender;
    this.isActiveControl.nativeElement.value = employee.isActive;
    this.joiningDateControl.nativeElement.value = employee.joiningDate;
    this.isInEditMode = true;
    this.editEmployee = employee;
  }

  trackByFun(index: number, employee: Iemployee) {
    return employee.employeeID;
  }

  onUpdateEmployee(){
    let UPDATE_ID = this.editEmployee.employeeID;
    let newEmployee: Iemployee = {
      name: this.nameControl.nativeElement.value,
      email: this.emailControl.nativeElement.value,
      phone: this.phoneControl.nativeElement.value,
      age: this.ageControl.nativeElement.value,
      city: this.cityControl.nativeElement.value,
      salary: this.salaryControl.nativeElement.value,
      position: this.positionControl.nativeElement.value,
      department: this.departmentControl.nativeElement.value,
      gender: this.genderControl.nativeElement.value,
      isActive: this.isActiveControl.nativeElement.value,
      joiningDate: this.joiningDateControl.nativeElement.value,
      employeeID: UPDATE_ID
    }
    let getIndex = this.employeesArr.findIndex(e => e.employeeID === UPDATE_ID)
    this.employeesArr[getIndex] = newEmployee;
    this.nameControl.nativeElement.value = '';
    this.emailControl.nativeElement.value = '';
    this.phoneControl.nativeElement.value = '';
    this.ageControl.nativeElement.value = '';
    this.cityControl.nativeElement.value = '';
    this.salaryControl.nativeElement.value = '';
    this.positionControl.nativeElement.value = '';
    this.departmentControl.nativeElement.value = '';
    this.genderControl.nativeElement.value = '';
    this.isActiveControl.nativeElement.value = '';
    this.joiningDateControl.nativeElement.value = '';
    this.isInEditMode = false;
  }

}
