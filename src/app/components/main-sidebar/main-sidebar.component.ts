import { MainTitleService } from './../../services/main-title.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './../../services/translation.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Subscription } from 'rxjs';

declare var $;
declare var Mmenu;
@Component({
  selector: 'app-tk-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit, OnDestroy {
  visibleSidebar1 = false;
  items: any[];
  userMenuItems: any[];
  translate: TranslateService;
  subscription: Subscription;
  constructor(
    public translationService: TranslationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public mainTitleService: MainTitleService
  ) {
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo.svg'));
      this.subscription = this.translationService.getLanguage().subscribe(data => {
        this.translate.use(data.lang);
      });
  }

  ngOnInit() {
    this.translate = this.translationService.getTranslateService();
    this.items = [
      {
        label: this.translate.instant('main-menu-home'),
        icon: 'home',
        url: 'dashboard'
      },
      {
        label: 'Project',
        icon: 'rate_review',
        url: 'object-list'
      },
      {
        label: this.translate.instant('user-menu-preferences'),
        icon: 'hot_tub',
        url: 'preferences'
      },
      // {
      //   label: this.translate.instant('user-menu-calendar'),
      //   icon: 'calendar_today',
      //   url: 'scheduler'
      // },
      // {
      //   label: 'Chat',
      //   icon: 'chat',
      //   url: 'chat'
      // }
    ];
    this.userMenuItems = [
      {
        label: 'My Items',
        icon: 'report_problem',
        childs: 'my-items-childs',
        children: [
          {
            label: 'Favorites',
            icon: 'star',
            url: 'favorites'
          },
          {
            label: 'Last modified',
            icon: 'star',
            url: 'last'
          },
          {
            label: 'Subscriptions',
            icon: 'star',
            url: 'subcsription'
          }
        ]
      }
    ];

  }

  toggleSidebar() {
    this.visibleSidebar1 = !this.visibleSidebar1;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
