import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemlist: any = []
  public productlist = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getproducts() {
    return this.productlist.asObservable();
  }

  setproduct(product: any) {
    this.cartitemlist.push(product);
    this.productlist.next(product);
  }

  addtoCart(product: any) {
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.gettotalprice();
    console.log(this.addtoCart);
  }

  gettotalprice() : number {
    let grandtotal = 0;
    this.cartitemlist.map((a: any) => {
      grandtotal += a.total;
    })
    return grandtotal;
  }
  removecartitem(product: any) {
    this.cartitemlist.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartitemlist.splice(index, 1);
      }
    })
    this.productlist.next(this.cartitemlist);
  }
  removeAllcart() {
    this.cartitemlist = []
    this.productlist.next(this.cartitemlist);

  }
  
}
