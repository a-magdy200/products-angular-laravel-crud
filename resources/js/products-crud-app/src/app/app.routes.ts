import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {SingleProductComponent} from './components/single-product/single-product.component';
import {ProductFormComponent} from './components/product-form/product-form.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: AllProductsComponent
  },
  {
    path: 'product/create',
    component: ProductFormComponent
  },
  {
    path: 'product/:id',
    component: SingleProductComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
