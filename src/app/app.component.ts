// app.component.ts
import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  // Toggle dark mode
  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  // Check if dark mode is enabled
  isDarkModeEnabled(): boolean {
    return this.themeService.darkModeEnabled; // Update property name
  }
}
