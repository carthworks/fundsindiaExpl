import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FundsexplorerComponent } from './fundsexplorer/fundsexplorer.component';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FundsexplorerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgxDatatableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
