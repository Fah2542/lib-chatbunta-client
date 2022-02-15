import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/page/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { AuthGuard } from './guard/auth.guard';
import { BookComponent } from './components/pages/book/book.component';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookEditComponent } from './components/pages/book-edit/book-edit.component';
const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "book", component: BookComponent, canActivate: [ AuthGuard ]},
    { path: "book/add", component: BookAddComponent, canActivate: [ AuthGuard ] },
    { path: "book/edit/:id", component: BookEditComponent, canActivate: [ AuthGuard ] },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
