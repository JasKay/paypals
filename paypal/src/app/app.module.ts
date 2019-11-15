import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SendshopComponent } from './sendshop/sendshop.component';
import { SignupfreeComponent } from './signupfree/signupfree.component';
import { FooterComponent } from './footer/footer.component';
import { SecurepayComponent } from './securepay/securepay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SendshopComponent,
    SignupfreeComponent,
    FooterComponent,
    SecurepayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
