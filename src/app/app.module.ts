import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuantityComponent } from './quantity/quantity.component';
import { ProductComponent } from './quantity/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    QuantityComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
