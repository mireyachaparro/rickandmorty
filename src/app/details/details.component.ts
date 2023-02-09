import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, take, tap } from 'rxjs';
import { Characters, Result } from 'src/utils/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  characterId: string | undefined;
  characterDetails: Result | undefined;
  name: string | undefined;
  image: string | undefined;
  gender: string | undefined;
  location: string | undefined;
  origin: string | undefined;
  species: string | undefined;
  status: string | undefined;

  constructor(private service: ApiService, private route: ActivatedRoute) {
    this.route.params
      .pipe(
        take(1),
        tap(({ id }) => (this.characterId = id))
      )
      .subscribe();
    this.service.getCharacters().subscribe((data) => {
      this.characterDetails = data.results.find(
        (data) => data.id.toString() == this.characterId?.toString()
      );
      this.name = this.characterDetails?.name;
      this.image = this.characterDetails?.image;
      this.gender = this.characterDetails?.gender;
      this.location = this.characterDetails?.location.name;
      this.origin = this.characterDetails?.origin.name;
      this.species = this.characterDetails?.species;
      this.status = this.characterDetails?.status;
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
