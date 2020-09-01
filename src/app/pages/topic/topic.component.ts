import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '@src/app/services/translation.service';
import { MainTitleService } from '@src/app/services/main-title.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  translate: TranslateService;
  comments: any[];
  message: string;
  constructor(
    public translationService: TranslationService,
    private mainTitleService: MainTitleService
  ) { }

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
      chatPanel.scrollTop = document.body.scrollHeight;
    }, 1000);
  }

  // provisional function to get random dates
  randomDate() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  }

  sendComment() {
    if(this.message.length>0) {
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
        chatPanel.scrollTop = document.body.scrollHeight;
      }, 1000);
      this.message = '';
    } else{
      // error
    }
  }
}
