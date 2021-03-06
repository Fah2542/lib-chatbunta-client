import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = `${environment.serviceUrl}/book`
  constructor(private http: HttpClient) { }

  getBookById(id: any) {
    console.log(id);
    let getUrl = `${this.url}/${id}`;
    console.log(getUrl);
    return this.http.get<any>(getUrl);
  }
  getBooks(): any {
    console.log(this.url);
    return this.http.get<any>(this.url);
  }

  addBook(book: any) {
    return this.http.post<any>(this.url, book)
      .pipe(map((res) => {
        return res;
      }));
  }

  updateBook(id: any, book: any) {
    let putUrl = `${this.url}/${id}`;
    console.log(putUrl);
    return this.http.put<any>(putUrl, book)
      .pipe(map((res) => {
        return res;
      }));
  }

  deleteBook(id: any){
    let deleteUrl = `${this.url}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
}
