import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './../../services/translation.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  // items: MenuItem[];
  items: any[];
  translate: TranslateService;
  constructor(
    public translationService: TranslationService
  ) { }

  ngOnInit() {
    this.translate = this.translationService.getTranslateService();
    this.items = [
      {
        label: 'user-menu-preferences',
        icon: 'directions_bike',
      },
      {
        label: 'user-menu-subscription',
        icon: 'rss_feed',
      },
      {
        label: 'user-menu-favorites',
        icon: 'star',
      },
      {
        label: 'user-menu-lastModified',
        icon: 'track_changes',
      },
      {
        label: 'user-menu-aboutTriskellSoftware',
        icon: 'info',
      },
      {
        label: 'user-menu-logOut',
        icon: 'input',
      }
    ]
  }
}

