import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISkills } from '../../models/skills';
import { skillsData } from '../../consts/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsArr: Array<ISkills> = skillsData;
  isInEditMode: boolean = false;
  editObj!: ISkills;

  @ViewChild('todoControl')
  todoControl!: ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  onSkillAdd(ele: HTMLInputElement) {
    let val = ele.value;
    let newSkill: ISkills = {
      todoItem: val,
      todoID: Date.now().toString()
    }
    this.skillsArr.push(newSkill);
  }

  onRemove(id: string) {
    let getIndex = this.skillsArr.findIndex(t => t.todoID === id);
    this.skillsArr.splice(getIndex, 1);
  }

  onEdit(skillObj: ISkills) {
    this.isInEditMode = true;
    this.editObj = skillObj;
    this.todoControl.nativeElement.value = skillObj.todoItem;
  }

  onSkillUpdate(ele: HTMLInputElement){
    let updateID = this.editObj.todoID;
    let updatedObj: ISkills={
      todoItem: ele.value,
      todoID: updateID
    }
    let getIndex = this.skillsArr.findIndex(t => t.todoID === updateID)
    this.skillsArr[getIndex] = updatedObj;
    this.todoControl.nativeElement.value='';
    this.isInEditMode = false;
    }

  trackByFun(index: number, item: ISkills) {
    return item.todoID;
  }
}
