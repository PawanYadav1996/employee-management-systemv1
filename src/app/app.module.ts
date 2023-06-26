import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { CustomLoadingComponent } from './custom-loading/custom-loading.component';
@NgModule({
  declarations: [AppComponent, CustomLoadingComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
