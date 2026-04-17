import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Imovie } from '../../models/movies';
import { moviesData } from '../../consts/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesArr: Array<Imovie> = moviesData;
  isInEditMode: boolean = false;
  editMovie!: Imovie;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('titleControl') titleControl!: ElementRef;
  @ViewChild('ratingControl') ratingControl!: ElementRef;
  @ViewChild('imageControl') imageControl!: ElementRef;
  @ViewChild('descriptionControl') descriptionControl!: ElementRef;
  onAddMovie() {
    let newMovie: Imovie = {
      title: this.titleControl.nativeElement.value,
      rating: this.ratingControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      description: this.descriptionControl.nativeElement.value,
      movieID: Date.now()
    }
    this.moviesArr.unshift(newMovie);
    this.titleControl.nativeElement.value = '';
    this.ratingControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
    this.descriptionControl.nativeElement.value = '';
  }

  onRemove(id: number){
    let getIndex = this.moviesArr.findIndex(m => m.movieID === id)
    this.moviesArr.splice(getIndex,1);
  }

  onEdit(movie: Imovie){
    this.titleControl.nativeElement.value = movie.title;
    this.ratingControl.nativeElement.value = movie.rating;
    this.imageControl.nativeElement.value = movie.image;
    this.descriptionControl.nativeElement.value = movie.description;
    this.isInEditMode = true;
    this.editMovie = movie;
  }

  onUpdateMovie(){
    let UPDATE_ID = this.editMovie.movieID;
    let UPDATED_MOVIE = {
      title: this.titleControl.nativeElement.value,
      rating: this.ratingControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      description: this.descriptionControl.nativeElement.value,
      movieID: UPDATE_ID
    }
    let getIndex = this.moviesArr.findIndex(m => m.movieID === UPDATE_ID);
    this.moviesArr[getIndex] = UPDATED_MOVIE;
    this.titleControl.nativeElement.value = '';
    this.ratingControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
    this.descriptionControl.nativeElement.value = '';
    this.isInEditMode = false;
  }

  trackByFun(index: number, movie: Imovie){
    return movie.movieID;
  }

}
