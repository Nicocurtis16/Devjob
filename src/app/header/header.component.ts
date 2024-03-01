// header.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service'; // Update path if necessary

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
