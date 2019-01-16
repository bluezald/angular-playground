import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id'); // the + sign is a shorthand for converting a string to a number
    this.pageTitle += ` : ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'May 21, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
