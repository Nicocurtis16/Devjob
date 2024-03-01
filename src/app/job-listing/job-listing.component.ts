import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
})
export class JobListingComponent implements OnInit {
  jobs: any[] = [];
  displayedCards = 12; // Track number of cards to display initially
  filteredJobs: any[] = []; // Add filteredJobs property

  constructor(
    private http: HttpClient,
    private router: Router,
    private themeService: ThemeService // Inject ThemeService
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/jobs.json').subscribe(
      (data: any[]) => {
        this.jobs = data;
        this.filteredJobs = data; // Initialize filteredJobs with all jobs initially
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

  // Function to increase the number of displayed cards
  loadMore() {
    this.displayedCards += 3; // Increase by 3 (you can adjust this as needed)
  }

  // Method to navigate to detail page with specified ID
  navigateToDetail(id: number): void {
    this.router.navigate(['/job-detail', id]);
  }

  // Check if dark mode is enabled
  isDarkModeEnabled(): boolean {
    return this.themeService.darkModeEnabled;
  }
}
