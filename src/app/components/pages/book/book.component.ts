import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private service: BookService, private router: Router) { }
  Books: any;
  ngOnInit(): void {
      this.service.getBooks().subscribe((res) => {
          this.Books = res.data;
          // console.log(this.products);
      });

  }

  deleteBook(id: any) {
      if (confirm("Confirm deletion?")) {
          this.service.deleteBook(id).subscribe((res) => {
              console.log(res);
              this.router.navigateByUrl('/', { skipLocationChange: true })
                  .then(() => this.router.navigate([`/book`]));
          });
      }
  }


}
