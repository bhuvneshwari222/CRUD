import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { StudentsComponent } from './shared/components/students/students.component';
import { RecipesComponent } from './shared/components/recipes/recipes.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { CartsComponent } from './shared/components/carts/carts.component';
import { EmployeesComponent } from './shared/components/employees/employees.component';
import { BooksComponent } from './shared/components/books/books.component';
import { MoviesComponent } from './shared/components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    StudentsComponent,
    RecipesComponent,
    UsersComponent,
    PostsComponent,
    ProductsComponent,
    CartsComponent,
    EmployeesComponent,
    BooksComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
