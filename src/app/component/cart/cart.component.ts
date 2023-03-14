import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public products: any = [];
   public grandtotal !: number;
   
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getproducts()
    .subscribe(res=>{
      this.products= res;
      this.grandtotal = this.cartService.gettotalprice();
    })
  }
  removeitem(item : any){
    this.cartService.removecartitem(item);
    
  }
    emptycart(){
      this.cartService.removeAllcart();
    }
}
