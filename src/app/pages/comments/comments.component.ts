import { CommentsService } from './../../services/comments/comments.service';
import { Component, OnInit } from '@angular/core';
import { MainTitleService } from '@src/app/services/main-title.service';
import { TranslationService } from '@src/app/services/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: any [];
  translate: TranslateService;
  navType: any = '';
  constructor(
    private commentsService: CommentsService,
    private mainTitleService: MainTitleService,
    public translationService: TranslationService,
  ) { 
    this.navType = this.mainTitleService.getNavType();
  }

  ngOnInit(): void {
    this.translate = this.translationService.getTranslateService();
    this.getComments();
    setTimeout(() => {
      this.mainTitleService.setSubTitle(this.translate.instant('main-menu-comments'));
    }, 0);
  }

  getComments() {
    this.comments = [
      {
        topic: 'A topic',
        ownerPicture: 'assets/images/user-example.jpg',
        id: 123454345435
      },
      {
        topic: 'Another topic',
        ownerPicture: 'assets/images/user-example2.jpg',
        id: 1200445435
      },
      {
        topic: 'Another topic 333',
        ownerPicture: 'assets/images/user-example.jpg',
        id: 99832843247
      }
    ];
    // this.commentsService.getComments().subscribe(
    //   (res: any) => {
    //     console.log('COMENTALES', res);
    //     this.comments = res;
    //   },
    //   err => {
    //     console.log('ERROKAKO');
    //   }
    // );
  }

  createTopic() {
    
  }

}
