import { CommentsService } from './../../services/comments/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: any [];
  constructor(
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentsService.getComments().subscribe(
      (res: any) => {
        console.log('COMENTALES', res);
        this.comments = res;
      }
    )
  }

}
