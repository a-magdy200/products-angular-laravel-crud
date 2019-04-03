import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json');
  }
  public getAllProducts() {
    return this.httpClient.get('http://localhost:8000/api/product', {headers: this.headers});
  }
  public getProducts(id: number) {
    return this.httpClient.get('http://localhost:8000/api/product/' + id, {headers: this.headers});
  }
  public createProduct(product: Product) {
    return this.httpClient.post('http://localhost:8000/api/product', product, {headers: this.headers});
  }
  public updateProduct(product: Product) {
    return this.httpClient.patch('http://localhost:8000/api/product/' + product.id, product, {headers: this.headers});
  }
  public deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:8000/api/product/' + id, {headers: this.headers});
  }
}
