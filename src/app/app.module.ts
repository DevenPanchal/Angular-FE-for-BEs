import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatMenuModule, MatSidenavModule, MatListModule
} from '@angular/material';



import { NewsService } from './news.service';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: SingleComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    ListComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule, MatMenuModule, MatSidenavModule, MatListModule


  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
