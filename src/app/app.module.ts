import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { register } from 'swiper/element/bundle';
import { ListProductsComponent } from './list-services/list-products.component';
register();
import {RatingModule} from 'primeng/rating';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ListServices1Component } from './list-services1/list-services1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CarouselComponent,
    ListProductsComponent,
    ListServices1Component
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
    RatingModule,
    CascadeSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,]
})
export class AppModule { }
