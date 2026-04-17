import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iproduct } from '../../models/products';
import { prodcutData } from '../../consts/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productArr: Array<Iproduct> = prodcutData;
  isInEditMode: boolean = false;
  editProduct!: Iproduct;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('titleControl') titleControl!: ElementRef;
  @ViewChild('categoryControl') categoryControl!: ElementRef;
  @ViewChild('ratingControl') ratingControl!: ElementRef;
  @ViewChild('descriptionControl') descriptionControl!: ElementRef;
  @ViewChild('priceControl') priceControl!: ElementRef;
  @ViewChild('discountPercentageControl') discountPercentageControl!: ElementRef;
  @ViewChild('stockControl') stockControl!: ElementRef;
  @ViewChild('imageControl') imageControl!: ElementRef;
  onAddProduct() {
    let newProduct: Iproduct = {
      title: this.titleControl.nativeElement.value,
      category: this.categoryControl.nativeElement.value,
      rating: this.ratingControl.nativeElement.value,
      description: this.descriptionControl.nativeElement.value,
      price: this.priceControl.nativeElement.value,
      discountPercentage: this.discountPercentageControl.nativeElement.value,
      stock: this.stockControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      productID: Date.now().toString()
    }
    this.productArr.unshift(newProduct);
    this.titleControl.nativeElement.value = '';
    this.categoryControl.nativeElement.value = '';
    this.ratingControl.nativeElement.value = '';
    this.descriptionControl.nativeElement.value = '';
    this.priceControl.nativeElement.value = '';
    this.discountPercentageControl.nativeElement.value = '';
    this.stockControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
  }

  onRemove(id: string) {
    let getIndex = this.productArr.findIndex(p => p.productID === id);
    this.productArr.splice(getIndex, 1);
  }

  onEdit(product: Iproduct) {
    this.titleControl.nativeElement.value = product.title;
    this.categoryControl.nativeElement.value = product.category;
    this.ratingControl.nativeElement.value = product.rating;
    this.descriptionControl.nativeElement.value = product.description;
    this.priceControl.nativeElement.value = product.price;
    this.discountPercentageControl.nativeElement.value = product.discountPercentage;
    this.stockControl.nativeElement.value = product.stock;
    this.imageControl.nativeElement.value = product.image;
    this.isInEditMode = true;
    this.editProduct = product;
  }

  onUpdateProduct() {
    let UPDATE_ID = this.editProduct.productID;
    let UPDATED_PRODUCT: Iproduct = {
      title: this.titleControl.nativeElement.value,
      category: this.categoryControl.nativeElement.value,
      rating: this.ratingControl.nativeElement.value,
      description: this.descriptionControl.nativeElement.value,
      price: this.priceControl.nativeElement.value,
      discountPercentage: this.discountPercentageControl.nativeElement.value,
      stock: this.stockControl.nativeElement.value,
      image: this.imageControl.nativeElement.value,
      productID: UPDATE_ID
    }
    let getIndex = this.productArr.findIndex(p => p.productID === UPDATE_ID)
    prodcutData[getIndex] = UPDATED_PRODUCT;
    this.titleControl.nativeElement.value = '';
    this.categoryControl.nativeElement.value = '';
    this.ratingControl.nativeElement.value = '';
    this.descriptionControl.nativeElement.value = '';
    this.priceControl.nativeElement.value = '';
    this.discountPercentageControl.nativeElement.value = '';
    this.stockControl.nativeElement.value = '';
    this.imageControl.nativeElement.value = '';
    this.isInEditMode = false;
  }

  trackByFun(index: number, product: Iproduct) {
    return product.productID;
  }

}
