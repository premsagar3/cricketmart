import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productlist: any;
  public filtercategory: any;
  searchkey: string = "";
  constructor(private api: ApiserviceService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res => {
      this.productlist = res;
      this.filtercategory = res;
      this.productlist.forEach((a: any) => {
        // if(a.category==="cricket-Bat" || a.category==="cricket-ball")
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
    this.cartservice.search.subscribe((val: any) => {
      this.searchkey = val;
    })
  }
  addtocart(item: any) {
    this.cartservice.addtoCart(item)
  }
  filter(category: string) {
    this.filtercategory = this.productlist
      .filter((a: any) => {
        if (a.category == category || category == "") {
          return a;
        }
      })

  }
}
