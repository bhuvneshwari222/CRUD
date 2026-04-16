import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Irecipe } from '../../models/recipes';
import { recipesData } from '../../consts/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipesArr: Array<Irecipe> = recipesData;
  isInEditMode: boolean = false;
  editObj!: Irecipe;
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('nameControl') nameControl!: ElementRef;
  @ViewChild('cuisineControl') cuisineControl!: ElementRef;
  @ViewChild('ingredientsControl') ingredientsControl!: ElementRef;
  @ViewChild('instructionsControl') instructionsControl!: ElementRef;
  @ViewChild('imageControl') imageControl!: ElementRef;

  onAddRecipe() {
    let newrecipe: Irecipe = {
      name: this.nameControl.nativeElement.value,
      cuisine: this.cuisineControl.nativeElement.value,
      ingredients: this.ingredientsControl.nativeElement.value,
      instructions: this.instructionsControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      recipeID: Date.now.toString()
    }
    this.recipesArr.push(newrecipe);
    this.nameControl.nativeElement.value='';
    this.cuisineControl.nativeElement.value='';
    this.ingredientsControl.nativeElement.value='';
    this.instructionsControl.nativeElement.value='';
    this.imageControl.nativeElement.value='';
  }

  onRemove(id: string){
    let getIndex = this.recipesArr.findIndex(r => r.recipeID === id);
    this.recipesArr.splice(getIndex,1);
  }

  onEdit(recipe: Irecipe){
    this.nameControl.nativeElement.value = recipe.name;
    this.cuisineControl.nativeElement.value = recipe.cuisine;
    this.ingredientsControl.nativeElement.value = recipe.ingredients;
    this.instructionsControl.nativeElement.value = recipe.instructions;
    this.imageControl.nativeElement.value = recipe.image;
    this.isInEditMode = true;
    this.editObj = recipe;
  }

  onUpdateRecipe(){
    let UPDATE_ID = this.editObj.recipeID;
    let UPDATED_RECIPE: Irecipe = {
      name: this.nameControl.nativeElement.value,
      cuisine: this.cuisineControl.nativeElement.value,
      ingredients: this.ingredientsControl.nativeElement.value,
      instructions: this.instructionsControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      recipeID: UPDATE_ID
    }
    let getIndex = this.recipesArr.findIndex(r => r.recipeID === UPDATE_ID);
    this.recipesArr[getIndex] = UPDATED_RECIPE;
    this.nameControl.nativeElement.value='';
    this.cuisineControl.nativeElement.value='';
    this.ingredientsControl.nativeElement.value='';
    this.instructionsControl.nativeElement.value='';
    this.imageControl.nativeElement.value='';
    this.isInEditMode = false;
  }

  trackByFun(index: number, recipe: Irecipe){
    return recipe.recipeID;
  }

}
