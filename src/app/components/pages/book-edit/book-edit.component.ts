import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id: any;
  bookForm!: FormGroup;
  currentBook: any;
  constructor(private service: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.bookForm = new FormGroup({
          name: new FormControl(),
          author: new FormControl(),
          publisher: new FormControl(),
          price: new FormControl(),
         
      });
      this.activatedRoute.params.subscribe(params => {
          this.id = params['id'];
      });
      this.service.getBookById(this.id).subscribe((res) => {
          this.currentBook = res.data;
          this.bookForm.controls['name'].setValue(this.currentBook.name);
          this.bookForm.controls['author'].setValue(this.currentBook.author);
          this.bookForm.controls['publisher'].setValue(this.currentBook.publisher);
          this.bookForm.controls['price'].setValue(this.currentBook.price);
         
      });
  }

  updateBook() {
      let book = {
          name: this.bookForm.value.name,
          author: this.bookForm.value.author,
          publisher: this.bookForm.value.publisher,
          price: this.bookForm.value.price,
          
      };
      this.service.updateBook(this.id, book).subscribe(res => {
          console.log(res);
          this.router.navigate(["/book"]);
      });
  }
  }


