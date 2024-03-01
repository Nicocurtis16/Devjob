import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { FindComponent } from './find/find.component';
import { LoadmoreComponent } from './loadmore/loadmore.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'job-description/:id', component: JobDetailComponent },
  { path: '', component: JobListingComponent, title: 'home' },
  // { path: 'details', component: JobDetailComponent, title: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobListingComponent,
    FindComponent,
    LoadmoreComponent,
    JobDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
