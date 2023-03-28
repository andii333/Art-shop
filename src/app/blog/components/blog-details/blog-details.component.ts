import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { fadeIn } from 'src/app/animations/fadeIn';
import { CategoryState } from 'src/app/NGXS/category.state';
import { GetCategoryNameById } from 'src/app/NGXS/category.action';
import { SendCategoryIdToState } from 'src/app/NGXS/painting.action';
import { PaintingsState } from 'src/app/NGXS/painting.state';
import { Painting } from 'src/app/interfaces/paintings';
import { Category } from 'src/app/interfaces/category';
import { BlogState } from 'src/app/NGXS/blog.state';
import { Post } from 'src/app/interfaces/post';
import { CategoryId, GetCategorysPosts, SendReply } from 'src/app/NGXS/blog.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendShopsReview } from 'src/app/NGXS/reviews.action';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailsComponent implements OnInit {
  @Select(CategoryState.categoryName) categoryName$!: Observable<string>
  @Select(CategoryState.categories) categories$!: Observable<Category[]>
  @Select(PaintingsState.paintingsForCategoryId) paintingsForCategoryId$!: Observable<Painting[]>;
  @Select(PaintingsState.dictionaryCategoryNumber) dictionaryCategory$!: Observable<{ [id: number]: number }>;
  @Select(BlogState.randomPost) randomPost$!: Observable<Post>;
  @Select(BlogState.randomPost1) randomPost1$!: Observable<Post>;
  @Select(BlogState.posts) posts$!: Observable<Post[]>;
  @Select(BlogState.categorysPosts) categorysPosts$!: Observable<Post[]>;
  subscription = new Subscription;
  scrWidth!: boolean;
  form!: FormGroup;
  postId!: number;
  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private title: Title,
    private meta: Meta,
    private fb: FormBuilder,
  ) { title.setTitle('Details of our blog | Art-Shop') }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if (window.innerWidth >= 900) { this.scrWidth = true }
    else if (window.innerWidth < 900) { this.scrWidth = false }
  }


  ngOnInit(): void {
    this.getScreenSize();
    this.subscription.add(this.route.params.subscribe(params => {
      this.postId = +params['id']
      this.store.dispatch(new GetCategoryNameById(this.postId));
      this.store.dispatch(new CategoryId(this.postId));
      this.store.dispatch(new GetCategorysPosts());
      this.store.dispatch(new SendCategoryIdToState(this.postId));
    }));
    this.subscription.add(this.categoryName$.subscribe(category => {
      if (category) {
        this.title.setTitle(`Blog ${category} category | Art-Shop`);
        this.meta.updateTag({ name: 'description', content: `${category}` });
      } else {
        this.title.setTitle('Blog | Art-Shop')
      }
    }));
    this.formBuil();
  }

  formBuil() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required
        // ,Validators.email
      ]],
      comments: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]],
      date: [new Date()],
      postId: [this.postId],
    });
  }

  submit() {
    // if (this.component === 'reviews') {
    this.store.dispatch(new SendReply(this.form.getRawValue()));
    // }
    //   if (this.component === 'aboutUs') {
    //     this.store.dispatch(new SendShopsReview(this.form.getRawValue()));
    //   }
  }
}
