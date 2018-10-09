import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { ItemListComponent } from './countries/item-list/item-list.component';
import { ItemComponent } from './countries/item-list/item/item.component';
import { EditItemComponent } from './countries/edit-wrapper/edit-item/edit-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { CountriesService } from './services/countries.service';
import { NewItemComponent } from './countries/edit-wrapper/new-item/new-item.component';
import { ViewItemComponent } from './countries/edit-wrapper/view-item/view-item.component';
import { EditWrapperComponent } from './countries/edit-wrapper/edit-wrapper.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsTableComponent } from './comments/comments-table/comments-table.component';
import { TableRowComponent } from './comments/comments-table/table-row/table-row.component';
import { FilterPipe } from './services/pipes/filter.pipe';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    ItemListComponent,
    ItemComponent,
    EditItemComponent,
    ErrorPageComponent,
    HeaderComponent,
    NewItemComponent,
    ViewItemComponent,
    EditWrapperComponent,
    CommentsComponent,
    CommentsTableComponent,
    TableRowComponent,
    FilterPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
