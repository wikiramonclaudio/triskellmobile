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
          label: this.translate.instant('main-menu-project'), icon: 'pi pi-fw pi-video',
          items: [
              [
                  {
                      label: 'Video 1',
                      items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                  },
                  {
                      label: 'Video 2',
                      items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Video 3',
                      items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                  },
                  {
                      label: 'Video 4',
                      items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Users', icon: 'pi pi-fw pi-users',
          items: [
              [
                  {
                      label: 'User 1',
                      items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                  },
                  {
                      label: 'User 2',
                      items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                  },
              ],
              [
                  {
                      label: 'User 3',
                      items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                  },
                  {
                      label: 'User 4',
                      items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                  }
              ],
              [
                  {
                      label: 'User 5',
                      items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                  },
                  {
                      label: 'User 6',
                      items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Deliverable', icon: 'pi pi-fw pi-calendar',
          items: [
              [
                  {
                      label: 'Event 1',
                      items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                  },
                  {
                      label: 'Event 2',
                      items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Event 3',
                      items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                  },
                  {
                      label: 'Event 4',
                      items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Risk', icon: 'pi pi-fw pi-cog',
          items: [
              [
                  {
                      label: 'Setting 1',
                      items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                  },
                  {
                      label: 'Setting 2',
                      items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                  },
                  {
                      label: 'Setting 3',
                      items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                  }
              ],
              [
                  {
                      label: 'Technology 4',
                      items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                  }
              ]
          ]
      }
  ]
  }

  toggleSidebar(){
    this.visibleSidebar1 = !this.visibleSidebar1;
  }

}