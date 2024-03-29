import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableModule } from 'primeng/table';
import { LocationsComponent } from './locations/locations.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    DetailsComponent,
    PageNotFoundComponent,
    LocationsComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
  ],
})
export class AppModule {}
