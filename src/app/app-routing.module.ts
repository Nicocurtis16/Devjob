import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
