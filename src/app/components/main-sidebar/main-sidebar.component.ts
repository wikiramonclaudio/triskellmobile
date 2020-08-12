import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './../../services/translation.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

declare var $;
declare var Mmenu;
@Component({
  selector: 'app-tk-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  visibleSidebar1 = false;
  items: any[];
  userMenuItems: any[];
  translate: TranslateService;
  constructor(
    public translationService: TranslationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo.svg'));
  }

  ngOnInit() {
    this.translate = this.translationService.getTranslateService();
    this.items = [
      {
        label: this.translate.instant('main-menu-home'),
        icon: 'home',
        url: '/home'
      },
      {
        label: this.translate.instant('main-menu-deliverable'),
        icon: 'rate_review',
        url: 'deliverables'
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
        label: 'Alerts and Notifications',
        icon: 'notifications_none',
        url: 'home'
      }, {
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

    this.initSidebarMmenu();
  }

  toggleSidebar() {
    this.visibleSidebar1 = !this.visibleSidebar1;
  }

  initSidebarMmenu() {
    // document.addEventListener(
    //   'DOMContentLoaded', () => {
    //   }
    //   );
    new Mmenu('#tkMainMenu', {
      extensions: [
        'pagedim-black',
        "shadow-panels", "fx-panels-slide-100", "border-none",
        // "fullscreen",
        //  "position-right"
      ],
      counters: true,
      navbars		: {
        content : [ "prev", "close" ]
      }
      // "navbars": [
      //   {
      //     "position": "bottom",
      //     "content": [
      //       "<a class='fa fa-envelope' href='#/'></a>",
      //       "<a class='fa fa-twitter' href='#/'></a>",
      //       "<a class='fa fa-facebook' href='#/'></a>"
      //     ]
      //   }
      // ]
    });
  }

}
