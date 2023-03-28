import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: "", component: BlogComponent },
  { path: "blog-details/:id", component: BlogDetailsComponent }
]

@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
