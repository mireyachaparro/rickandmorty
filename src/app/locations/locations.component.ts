import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from 'src/utils/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  locations$: Subscription;
  locations: Location = {} as Location;

  constructor(private service: ApiService) {
    this.locations$ = this.service.getLocations().subscribe((data) => {
      this.locations = data;
      console.log(data);
    });
  }
}
