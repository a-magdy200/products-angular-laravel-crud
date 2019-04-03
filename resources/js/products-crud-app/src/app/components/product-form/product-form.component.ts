import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../classes/product';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  private product: Product;
  constructor(private router: Router, private productsService: ProductsService, private route: ActivatedRoute) {

    this.route.params.subscribe( params => {
      if (params.id) {
        productsService.getProducts(params.id).subscribe( (product: Product) => this.product = product);
      } else {
        this.product = new Product();
        this.product.id = 0;
        this.product.name = '';
        this.product.description = '';
        this.product.picture = '';
      }
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.product.id !== 0) {
      this.productsService.updateProduct(this.product).subscribe( product => {
        console.log(product);
        this.router.navigate(['products']);
      });
    }
  }
  onCreate() {
    if (this.product.id === 0) {
      this.productsService.createProduct(this.product).subscribe( product => {
        console.log(product);
        this.router.navigate(['products']);
      });
    }
  }
}
