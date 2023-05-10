import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
  name: String = "Channel";
  description: String = 'Brand parfume collection.';
  price: Number = 200;
  category: typeof Category = Category;
  isAvailable: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
