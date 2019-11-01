import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './service/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { HeadComponent } from './nav/head/head.component';
import { HomeComponent } from './base/home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BookingComponent } from './booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { ViewmenuComponent } from './components/viewmenu/viewmenu.component';
import { ImageComponent } from './admin/image/image.component';
import { EditmenuComponent } from './admin/editmenu/editmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    SigninComponent,
    BookingComponent,
    UserComponent,
    AdminHomeComponent,
    AdminMenuComponent,
    LogoutComponent,
    ViewmenuComponent,
    ImageComponent,
    EditmenuComponent
  ],
  imports: [
   [ToastrModule.forRoot()],
   BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
