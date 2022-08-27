import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: any[] = [
    {
      id: 1,
      name: 'windstorm',
      author: 'Windstorm',
      src: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 700,
    },
    {
      id: 2,
      name: 'Michael',
      author: 'Michael',
      src: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp.jpg",
      price: 500,
    }
  ];

  isShowing:boolean = false;
  handleClick(){
    this.isShowing = !this.isShowing;
  }

  myName:string = "jihan";

  handleInputChange(e:any){
    this.myName = e.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
