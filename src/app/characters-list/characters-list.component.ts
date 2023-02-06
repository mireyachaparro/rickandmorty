import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Characters } from 'src/utils/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters$: Subscription;
  characters: Characters = {} as Characters;

  constructor(private service: ApiService) {
    this.characters$ = this.service.getCharacters().subscribe((data) => {
      this.characters = data;
      console.log(data);
    });
  }
}
