import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { ProductComponent } from './components/pages/product/product.component';
import { MainComponent } from './components/pages/main/main.component';
import { NewProductComponent } from './components/pages/new-product/new-product.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { LoginComponent } from './components/page/login/login.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { BookComponent } from './components/pages/book/book.component';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookEditComponent } from './components/pages/book-edit/book-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    MainComponent,
    NewProductComponent,
    EditProductComponent,
    ProductDetailComponent,
    LoginComponent,
    BookComponent,
    BookAddComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
