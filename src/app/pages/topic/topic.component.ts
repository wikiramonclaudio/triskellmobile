import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '@src/app/services/translation.service';
import { MainTitleService } from '@src/app/services/main-title.service';
declare var $;
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  translate: TranslateService;
  comments: any[];
  message: string;
  navType: any = '';
  constructor(
    public translationService: TranslationService,
    private mainTitleService: MainTitleService
  ) {
    this.navType = this.mainTitleService.getNavType();
  }

  ngOnInit(): void {
    this.translate = this.translationService.getTranslateService();
    this.getComments();
  }

  // get comments of selected topic
  getComments() {
    this.comments = [
      {
        topic: 'A topic',
        content: 'The PRJ will be postponed',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Eloise Wilson',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'Thanks, How do you think this delay will affect the next release?',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Tomas Osterhagen',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'I think there is no problem about this delay.',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Eloise Wilson',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'The PRJ will be postponed',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Eloise Wilson',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'Thanks, How do you think this delay will affect the next release?',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Tomas Osterhagen',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'I think there is no problem about this delay.',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Eloise Wilson',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'The PRJ will be postponed',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Eloise Wilson',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'Thanks, How do you think this delay will affect the next release?',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Tomas Osterhagen',
        date: this.randomDate()
      },
      {
        topic: 'A topic',
        content: 'I think there is no problem about this delay.',
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Eloise Wilson',
        date: this.randomDate()
      }
    ];

    setTimeout(() => {
      const chatPanel = document.querySelector('#topic-content');
      $('#topic-content').animate({scrollTop: $(document).height()}, 'slow');
    }, 1000);
  }

  // provisional function to get random dates
  randomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  }

  // on send comment
  sendComment() {
    if (this.message.length > 0) {
      const newComment = {
        topic: 'A topic',
        content: this.message,
        ownerImg: 'assets/images/user-example.jpg',
        owner: 'Eloise Wilson',
        date: new Date()
      };
      this.comments.push(newComment);
      setTimeout(() => {
        const chatPanel = document.querySelector('#topic-content');
        $('#topic-content').animate({scrollTop: $(document).height()}, 'slow');
      }, 1000);
      this.message = '';
    } else{
      // error
    }
  }
}
