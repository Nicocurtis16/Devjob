import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job-listing/job.service';
import { ThemeService } from '../theme.service'; // Assuming you have a ThemeService

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent implements OnInit {
  job: any;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private themeService: ThemeService // Inject ThemeService
  ) {}
  @Input() filteredJobs: any[] = []; // Receive filtered jobs from parent component

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const jobId = +params['id'];
      this.jobService.getJobById(jobId).subscribe(
        (job) => (this.job = job),
        (error) => console.error('Error fetching job:', error)
      );
    });
  }

  openCompanyWebsite(websiteUrl: string | undefined): void {
    if (websiteUrl) {
      window.open(websiteUrl, '_blank');
    }
  }

  openApplyPage(applyUrl: string | undefined): void {
    if (applyUrl) {
      window.open(applyUrl, '_blank');
    }
  }

  // Check if dark mode is enabled
  isDarkModeEnabled(): boolean {
    return this.themeService.darkModeEnabled;
  }
}
