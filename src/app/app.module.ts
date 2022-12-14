import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { ChalangeModule } from './chalange/chalange.module';
import { appInterceptorProvider } from './app.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PublicProfileComponent,
  ],
  imports: [
    ChalangeModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [ appInterceptorProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
