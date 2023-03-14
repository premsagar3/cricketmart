import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  public totalitem: number = 0;
  public searchterm : string = "";
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getproducts().subscribe(res=>{
       this.totalitem = res.length;
    })
  }
  search(event:any){
    this.searchterm=(event.target as HTMLInputElement).value;
    console.log(this.searchterm);
    this.cartservice.search.next(this.searchterm);

  }
  


}
