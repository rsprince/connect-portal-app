import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { HomeComponent } from './home/home.component';
 
// added for Fannie Mae ADK Libraries
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { HelpComponent } from './help/help.component';
import { ChromeHeaderComponent } from './chrome-header/chrome-header.component';
import { ChromeFooterComponent } from './chrome-footer/chrome-footer.component';
import { GetStartedComponent } from './help/get-started/get-started.component';
import { FmcCardComponent } from './help/fmc-card/fmc-card.component';
import { ElearningCardComponent } from './help/elearning-card/elearning-card.component';
import { CurrencyPipe } from '@angular/common';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,
    HelpComponent,
    ChromeHeaderComponent,
    ChromeFooterComponent,
    GetStartedComponent,
    FmcCardComponent,
    ElearningCardComponent,
    // ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }