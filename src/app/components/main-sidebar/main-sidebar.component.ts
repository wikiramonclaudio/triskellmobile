import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './../../services/translation.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

declare var $;
@Component({
  selector: 'app-tk-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  visibleSidebar1 = false;
  items:  any [];
  translate: TranslateService;
  constructor(
    public translationService: TranslationService,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
        'logo',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/logo.svg'))
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
      {
          label: this.translate.instant('user-menu-calendar'),
          icon: 'calendar_today',
          url: 'scheduler'
      },
      {
          label: 'Chat',
          icon: 'chat',
          url: 'chat'
      }
  ]
  }

  toggleSidebar(){
    this.visibleSidebar1 = !this.visibleSidebar1;
  }

}