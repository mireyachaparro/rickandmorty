import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Characters } from 'src/utils/interfaces';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'R Y M';
  // counter = 0;

  // increment() {
  //   this.counter++;
  // }

  // decrement() {
  //   this.counter--;
  // }

  // form = new FormGroup({
  //   name: new FormControl('', Validators.required), //esto tb se tiene que importar FormControl({}), y el validators
  //   surname: new FormControl('', Validators.required),
  // }); //te pide importar FormGroup({})

  // this.characters$ = this.service.getCharacters().subscribe((data) => {
  //   console.log(data);
  // });
}
// }
