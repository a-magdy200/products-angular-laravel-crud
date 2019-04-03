import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { rootRouterConfig } from './app.routes';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllProductsComponent,
    ProductFormComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
