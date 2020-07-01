import {Component, Input, OnInit} from '@angular/core';
import {Comments} from '../../models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comments;
  constructor() { }


  ngOnInit(): void {
  }

}
