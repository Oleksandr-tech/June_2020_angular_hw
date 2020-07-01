import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {Comments} from '../../models/Comment';

@Component({
  selector: 'app-root',
  template: `
    <h1>Workers</h1>
    <app-user *ngFor="let u of users.slice(2, 5)" [userX]="u"></app-user>
    <app-posts *ngFor="let p of posts.slice(2, 5)" [post]="p"></app-posts>
    <app-comment *ngFor="let c of comments.slice(5, 10)" [comment]="c"></app-comment>
    `,
  styles: [`h1 {
    background: darkgreen;
    color: bisque;
        }`, `div{
    margin-bottom: 10px;
    border: 1px solid red;
  }`]
})
export class AppComponent {
  users: User[];
  posts: Post[];
  comments: Comments[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data)
    ;
    this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data)
    ;
    this.httpClient
      .get<Comments[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => this.comments = data)
    ;
  }
}
