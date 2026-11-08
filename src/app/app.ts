import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// main component for the application
// controls behavior and data
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('future-portfolio');
}
