import { Component } from '@angular/core';

// this is a decorator, it doesn't require a decorator at the end!
@Component({
  selector: 'app-root',
  template: '<h1>Artist</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';
}
