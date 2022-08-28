import { Component, OnInit } from '@angular/core';
import { BookServiceService } from './book-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  books: any[] = [];

  isShowing:boolean = true;
  handleClick(){
    this.isShowing = !this.isShowing;
  }

  addtoCart(book:any) {
    console.log(book);
  }

  myName:string = "";

  handleInputChange(e:any){
    this.myName = e.target.value;
  }

}
