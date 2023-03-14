import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BatsComponent } from './pages/bats/bats.component';
import { BallsComponent } from './pages/balls/balls.component';
import { CricketpadComponent } from './pages/cricketpad/cricketpad.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { GlovesComponent } from './pages/gloves/gloves.component';
import { StumpsComponent } from './pages/stumps/stumps.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    LoginComponent,
    FooterComponent,
    FilterPipe,
    BatsComponent,
    BallsComponent,
    CricketpadComponent,
    ShoesComponent,
    GlovesComponent,
    StumpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
