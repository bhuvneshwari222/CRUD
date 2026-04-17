import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ibook } from '../../models/books';
import { booksData } from '../../consts/books';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  booksArr: Array<Ibook> = booksData
  isInEditMode: boolean = false;
  editBook!: Ibook;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('titleControl') titleControl!: ElementRef;
  @ViewChild('authorControl') authorControl!: ElementRef;
  @ViewChild('categoryControl') categoryControl!: ElementRef;
  @ViewChild('descriptionControl') descriptionControl!: ElementRef;
  @ViewChild('imageControl') imageControl!: ElementRef;
  onAddBook(){
    let newBook: Ibook = {
      title: this.titleControl.nativeElement.value,
      author: this.authorControl.nativeElement.value,
      category: this.categoryControl.nativeElement.value,
      description: this.descriptionControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      bookID: Date.now()
    }
    this.booksArr.unshift(newBook);
    this.titleControl.nativeElement.value = '';
    this.authorControl.nativeElement.value = '';
    this.categoryControl.nativeElement.value = '';
    this.descriptionControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
  }
  trackByFun(index: number, book:Ibook){
    return book.bookID;
  }

  onRemove(id: number){
    let getIndex = this.booksArr.findIndex(b => b.bookID === id);
    this.booksArr.splice(getIndex,1);
  }

  onEdit(book: Ibook){
    this.titleControl.nativeElement.value = book.title;
    this.authorControl.nativeElement.value = book.author;
    this.categoryControl.nativeElement.value = book.category;
    this.descriptionControl.nativeElement.value = book.description;
    this.imageControl.nativeElement.value = book.image;
    this.isInEditMode = true;
    this.editBook = book;
  }

  onUpdateBook(){
    let UPDATE_ID = this.editBook.bookID;
    let UPDATED_BOOK = {
      title: this.titleControl.nativeElement.value,
      author: this.authorControl.nativeElement.value,
      category: this.categoryControl.nativeElement.value,
      description: this.descriptionControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      bookID: UPDATE_ID
    }
    let getIndex = this.booksArr.findIndex(b => b.bookID === UPDATE_ID);
    this.booksArr[getIndex] = UPDATED_BOOK;
    this.titleControl.nativeElement.value = '';
    this.authorControl.nativeElement.value = '';
    this.categoryControl.nativeElement.value = '';
    this.descriptionControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
    this.isInEditMode = false;
  }

}
