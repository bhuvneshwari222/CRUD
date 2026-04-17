import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icarts } from '../../models/carts';
import { cartsData } from '../../consts/carts';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartsArr: Array<Icarts> = cartsData;
  isInEditMode: boolean = false;
  editCart!: Icarts;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('titleControl') titleControl!: ElementRef;
  @ViewChild('priceControl') priceControl!: ElementRef;
  @ViewChild('quantityControl') quantityControl!: ElementRef;
  @ViewChild('totalControl') totalControl!: ElementRef;
  @ViewChild('discountPercentageControl') discountPercentageControl!: ElementRef;
  @ViewChild('discountedTotalControl') discountedTotalControl!: ElementRef;
  @ViewChild('thumbnailControl') thumbnailControl!: ElementRef;
  onAddCart() {
    let newCart: Icarts = {
      title: this.titleControl.nativeElement.value,
      price: this.priceControl.nativeElement.value,
      quantity: this.quantityControl.nativeElement.value,
      total: this.totalControl.nativeElement.value,
      discountPercentage: this.discountPercentageControl.nativeElement.value,
      discountedTotal: this.discountedTotalControl.nativeElement.value,
      thumbnail: this.thumbnailControl.nativeElement.value,
      cartID: Date.now()
    }
    this.cartsArr.unshift(newCart);
    this.titleControl.nativeElement.value = '';
    this.priceControl.nativeElement.value = '';
    this.quantityControl.nativeElement.value = '';
    this.totalControl.nativeElement.value = '';
    this.discountPercentageControl.nativeElement.value = '';
    this.discountedTotalControl.nativeElement.value = '';
    this.thumbnailControl.nativeElement.value = '';
  }

  onRemove(id: number) {
    let getIndex = this.cartsArr.findIndex(c => c.cartID === id)
    this.cartsArr.splice(getIndex, 1);
  }

  onEdit(cart: Icarts) {
    this.titleControl.nativeElement.value = cart.title;
    this.priceControl.nativeElement.value = cart.price;
    this.quantityControl.nativeElement.value = cart.quantity;
    this.totalControl.nativeElement.value = cart.total;
    this.discountPercentageControl.nativeElement.value = cart.discountedTotal;
    this.discountedTotalControl.nativeElement.value = cart.discountPercentage;
    this.thumbnailControl.nativeElement.value = cart.thumbnail;
    this.isInEditMode = true;
    this.editCart = cart;
  }

  onUpdateCart(){
    let UPDATE_ID = this.editCart.cartID;
    let UPDATED_CART: Icarts = {
      title: this.titleControl.nativeElement.value,
      price: this.priceControl.nativeElement.value,
      quantity: this.quantityControl.nativeElement.value,
      total: this.totalControl.nativeElement.value,
      discountPercentage: this.discountPercentageControl.nativeElement.value,
      discountedTotal: this.discountedTotalControl.nativeElement.value,
      thumbnail: this.thumbnailControl.nativeElement.value,
      cartID: UPDATE_ID
    }
    let getIndex = this.cartsArr.findIndex(c => c.cartID === UPDATE_ID)
    this.cartsArr[getIndex] = UPDATED_CART;
    this.titleControl.nativeElement.value = '';
    this.priceControl.nativeElement.value = '';
    this.quantityControl.nativeElement.value = '';
    this.totalControl.nativeElement.value = '';
    this.discountPercentageControl.nativeElement.value = '';
    this.discountedTotalControl.nativeElement.value = '';
    this.thumbnailControl.nativeElement.value = '';
    this.isInEditMode = false;
  }

  trackByFun(index: number, cart: Icarts) {
    return cart.cartID;
  }
}
