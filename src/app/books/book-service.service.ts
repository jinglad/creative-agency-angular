import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() {}

  getBooks() {
    return [
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
    ]
  }
}
