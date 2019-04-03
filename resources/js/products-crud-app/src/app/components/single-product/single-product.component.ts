import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Router, RouterLink, Navigation, ActivatedRoute} from '@angular/router';
import {Product} from '../../classes/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  private product: Product;
  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      const productId = parseInt(params.id, 10);
      this.productsService.getProducts(productId).subscribe( (product: Product) => this.product = product);
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this.productsService.deleteProduct(this.product.id).subscribe(
      product => {
        console.log('Deleted.');
        this.router.navigate(['products']);
      }
    );
  }
}
