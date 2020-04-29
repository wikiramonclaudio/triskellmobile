import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './../../services/translation.service';
import { ColorPickerService } from './../../services/color-picker.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  // items: MenuItem[];
  items: any[];
  translate: TranslateService;
  darktheme: boolean = false;
  constructor(
    public translationService: TranslationService,
    private colorPicker: ColorPickerService
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
  changeTheme(){
    this.darktheme = !this.darktheme
  }
  pickColor(color: string) {
    let colorTheme = '';
    if (color !== '') {
      colorTheme = `-${color}`;
    }
    this.colorPicker.setColorClass(
      `triskell-theme${colorTheme}`
    );
  }
}

