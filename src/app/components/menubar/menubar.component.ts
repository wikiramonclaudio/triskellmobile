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
        label: this.translate.instant('user-menu-configurator'),
        icon: 'pi pi-fw pi-key',
      },
      {
        label: this.translate.instant('user-menu-superSed'),
        icon: 'pi pi-fw pi-cog',
      },
      {
        label: this.translate.instant('user-menu-notifications'),
        icon: 'pi pi-fw pi-bell',
      },
      {
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: this.translate.instant('user-menu-languages'),
            items: [
              {
                label: 'French',
              },
              {
                label: 'English',
              },
              {
                label: 'Spanish',
              }
            ]
          },
          {
            label: this.translate.instant('user-menu-preferences'),
          },
          {
            label: this.translate.instant('user-menu-subscription'),
          },
          {
            label: this.translate.instant('user-menu-favorites'),
          },
          {
            label: this.translate.instant('user-menu-lastModified'),
          },
          {
            label: this.translate.instant('user-menu-aboutTriskellSoftware'),
          },
          {
            label: this.translate.instant('user-menu-logOut'), icon: 'pi pi-fw pi-times'
          }
        ]
      },

    ];
  }
}

