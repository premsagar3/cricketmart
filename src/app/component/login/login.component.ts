import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email="";
  password="";

  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  logInuser(){
    if(this.email=="admin"&& this.password=="1234"){
      alert('login succcesful!');
      this.route.navigate(['products'])
    }else{
      alert ('Please Enter Valid email and password!')
    }
  }
 
  // logOut(){
  //   this.logOut();
  //   this.route.navigate([''])
  // }

}
