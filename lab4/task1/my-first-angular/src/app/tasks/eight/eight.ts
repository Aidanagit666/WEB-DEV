import { Component } from '@angular/core';

@Component({
  selector: 'app-eight',
  template: `<p>The user's name is {{ name }}</p>`,
  styles: [`
    p { margin: 0; }
  `]
})
export class Eight {
  name = 'San Francisco';
}
