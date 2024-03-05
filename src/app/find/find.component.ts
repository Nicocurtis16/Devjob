import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
})
export class FindComponent {
  filterTitle: string = '';
  filterLocation: string = '';
  filterFullTime: boolean = false;
  jobs: any[] = []; // Initialize jobs array
  isPopoverVisible: boolean = false;
  popoverLeft: number = 0;
  popoverTop: number = 0;
  7;

  filteredJob: any[] = [];
  @Output() filteredJobsEmitter = new EventEmitter<{
    filterTitle: string;
    filterLocation: string;
    filterFullTime: boolean;
  }>(); // Emit filtered jobs

  onSearchChange() {
    const searchData = {
      filterTitle: this.filterTitle,
      filterLocation: this.filterLocation,
      filterFullTime: this.filterFullTime,
    };

    this.filteredJobsEmitter.emit(searchData);
  }

  constructor(
    private httpClient: HttpClient,
    private themeService: ThemeService
  ) {}

  isDarkModeEnabled(): boolean {
    return this.themeService.darkModeEnabled;
  }

  // filterCards() {
  //   this.jobs = this.jobs.filter((job) => {
  //     let match = true;
  //     if (
  //       this.filterTitle &&
  //       job.title &&
  //       !job.title.toLowerCase().includes(this.filterTitle.toLowerCase())
  //     ) {
  //       match = false;
  //     }
  //     if (
  //       this.filterLocation &&
  //       job.location &&
  //       !job.location.toLowerCase().includes(this.filterLocation.toLowerCase())
  //     ) {
  //       match = false;
  //     }
  //     if (this.filterFullTime && job.contract !== 'Full Time') {
  //       match = false;
  //     }
  //     return match;
  //   });
  //}

  togglePopover() {
    this.isPopoverVisible = !this.isPopoverVisible;
    // Calculate popover position based on the trigger element's position if needed
    // Update popoverLeft and popoverTop accordingly
  }

  onMenuItemClick(option: string) {
    // Handle menu item click
    console.log('Selected option:', option);
    // You can perform additional actions here
    // For example, close the popover after selecting an option
    this.isPopoverVisible = false;
  }
}
