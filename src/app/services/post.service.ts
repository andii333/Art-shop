// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../interfaces/post';
// import { Reply } from '../interfaces/reply';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private data: DataService,
    // private httpClient: HttpClient
    ) { }

  getPosts(): Observable<Post[]> {
    // return this.httpClient.get<Post[]>(`http://localhost:3000/posts`)
    return of(this.data.posts)
  }

  getCategoryPosts(categoryId:number): Observable<Post[]> {
    // return this.httpClient.get<Post[]>(`http://localhost:3000/posts?category_like=${categoryId}`)
    return of(this.data.posts.filter(post => categoryId === post.category)) 
  }

  
  sendPost(post: Post): Observable<Post> {
    // return this.httpClient.post<Post>('http://localhost:3000/posts', post, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // })
    this.data.posts.push(post);
    return of(post)
  }

  // getRepliesByPaintingId(paintingId:number): Observable<Reply[]> {
  //   // return this.httpClient.get<Reply[]>(`http://localhost:3000/replies?postId_like=${id}`)
  //   return of(this.data.posts.filter(post => paintingId === post.category)) 
  // }

  // sendReply(reply: Reply, replyId:string): Observable<Reply> {
  //   return this.httpClient.post<Reply>(`http://localhost:3000/replies/postId_like=${replyId}`, reply, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   })
  // }
}