import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule ,HammerModule} from '@angular/platform-browser';

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
register();
import { ListServicesComponent } from './list-services/list-services.component';

import {RatingModule} from 'primeng/rating';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { PopularservicesComponent } from './popularservices/popularservices.component';
import { DealsTheDayComponent } from './deals-the-day/deals-the-day.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login.component';
import { BodyInfoComponent } from './body-info/body-info.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ListServicesComponent,
    CarouselComponent,
    PopularservicesComponent,
    DealsTheDayComponent,
    RegisterComponent,
    LoginComponent,
    BodyInfoComponent,
    FooterComponent,

    
   
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
    CascadeSelectModule,
    HammerModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,]
})
export class AppModule { }
