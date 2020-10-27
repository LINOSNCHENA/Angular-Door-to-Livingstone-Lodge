import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/products';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  title: string;
  rows: Product[] = [];

  p: number = 1;
  limit: number = 2;
  total: number;

  constructor(
    private productService: ServicesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Products';
    this.getProducts(this.p);
  }

  getProducts(p: number) {
    let offset = (p - 1) * this.limit;
    this.productService.getProducts(offset, this.limit).subscribe(
      result => {
        this.rows = result.data;
        this.total = result.total;
      }
    )
  }

  getPage(pageNo: number) {
    this.p = pageNo;
    this.getProducts(this.p);
  }

  // deleteProduct(id: number) {
  //   if (confirm('Are you sure want to delete?')) {
  //     this.productService.deleteProduct(id).subscribe(
  //       result => {
  //         console.log(result);
  //         if (!result.error) {
  //           this.rows = this.rows.filter(item => item.id != id)
  //         } else {
  //           alert('Some thingh went wrong!');
  //         }
  //       }
  //     )
  //   }
  // }

}
