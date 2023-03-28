import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { CategoryState } from 'src/app/NGXS/category.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() post$!: Observable<Post>;
  @Input() posts$!: Observable<Post[]>;
  @Select(CategoryState.categoryName) categoryName$!: Observable<string>

  constructor(
    private router:Router
  ){}
  goToPost(postId:number, categoryId:number){
    this.router.navigate([`/blog/${categoryId}/blog-details/${postId}`])
  }
}
