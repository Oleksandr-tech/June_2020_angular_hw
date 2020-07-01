import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './Components/user/user.component';
import { PostsComponent } from './Components/posts/posts.component';
import { CommentComponent } from './Components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
