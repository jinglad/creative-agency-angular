import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() book: any = {};
  @Output() bookEmitter: any = new EventEmitter<any>();

  addtoCart(){
    this.bookEmitter.emit(this.book);
  }

}
