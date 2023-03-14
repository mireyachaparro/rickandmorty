import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { DetailsComponent } from './details/details.component';
import { LocationsComponent } from './locations/locations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: CharactersListComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'locations', component: LocationsComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
