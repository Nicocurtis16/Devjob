import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  // Method to fetch all jobs
  getJobs(): Observable<any[]> {
    return this.http.get<any[]>('assets/jobs.json');
  }

  // Method to fetch a job by its ID
  getJobById(id: number): Observable<any> {
    return this.http
      .get<any>('assets/jobs.json')
      .pipe(map((jobs) => jobs.find((job) => job.id === id)));
  }
}
