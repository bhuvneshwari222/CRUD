import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipost } from '../../models/post';
import { postData } from '../../consts/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postArr: Array<Ipost> = postData;
  isInEditMode: boolean = false;
  editPost!: Ipost;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('titleControl') titleControl!: ElementRef;
  @ViewChild('contentControl') contentControl!: ElementRef;
  onAddPost() {
    let newPost: Ipost = {
      title: this.titleControl.nativeElement.value,
      content: this.contentControl.nativeElement.value,
      postID: Date.now.toString()
    }
    this.postArr.push(newPost);
    this.titleControl.nativeElement.value = '';
    this.contentControl.nativeElement.value = '';
  }

  onRemove(id: string){
    let getIndex = this.postArr.findIndex(p => p.postID === id);
    this.postArr.splice(getIndex,1);
  }

  onEdit(post: Ipost){
    this.titleControl.nativeElement.value = post.title;
    this.contentControl.nativeElement.value = post.content;
    this.isInEditMode = true;
    this.editPost = post;
  }

  onUpdatePost(){
    let UPDATE_ID = this.editPost.postID;
    let UPDATE_OBJ = {
      title: this.titleControl.nativeElement.value,
      content: this.contentControl.nativeElement.value,
      postID: UPDATE_ID
    }
    let getIndex = this.postArr.findIndex(p => p.postID === UPDATE_ID);
    this.postArr[getIndex] = UPDATE_OBJ;
    this.titleControl.nativeElement.value = '';
    this.contentControl.nativeElement.value = '';
    this.isInEditMode = false;
  }

  trackByFun(index: number, post: Ipost){
      return post.postID;
    }
}
