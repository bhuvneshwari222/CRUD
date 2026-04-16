import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { StudentsComponent } from './shared/components/students/students.component';
import { RecipesComponent } from './shared/components/recipes/recipes.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PostsComponent } from './shared/components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    StudentsComponent,
    RecipesComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
