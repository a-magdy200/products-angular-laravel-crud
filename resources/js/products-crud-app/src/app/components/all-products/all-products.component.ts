import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../classes/product';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  private products: Product[];
  constructor(private productsService: ProductsService) {
    productsService.getAllProducts().subscribe( (products: Product[]) => {
      this.products = products;
    });
  }

  ngOnInit() {
  }

}
