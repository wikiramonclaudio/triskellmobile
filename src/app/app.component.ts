import { MainTitleService } from './services/main-title.service';
import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ColorPickerService } from './services/color-picker.service';
import { filter } from 'rxjs/operators';
import { Event as NavigationEvent } from '@angular/router';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeClass;
  constructor(
    private colorPicker: ColorPickerService,
    private router: Router,
    private mainTitleService: MainTitleService
    ) {
    this.themeClass = this.colorPicker.getColorClass();
    router.events
      .pipe(
        // The "events" stream contains all the navigation events. For this demo,
        // though, we only care about the NavigationStart event as it contains
        // information about what initiated the navigation sequence.
        filter(
          (event: NavigationEvent) => {
            return (event instanceof NavigationStart);
          }
        )
      )
      .subscribe(
        (event: NavigationStart) => {
          console.log('full event', event);
          console.group('NavigationStart Event');
          // Every navigation sequence is given a unique ID. Even "popstate"
          // navigations are really just "roll forward" navigations that get
          // a new, unique ID.
          console.log('navigation id:', event.id);
          console.log('route:', event.url);
          // The "navigationTrigger" will be one of:
          // --
          // - imperative (ie, user clicked a link).
          // - popstate (ie, browser controlled change such as Back button).
          // - hashchange
          // --
          // NOTE: I am not sure what triggers the "hashchange" type.
          console.log('trigger:', event.navigationTrigger);

          // if back button pressed
          if (event.navigationTrigger == 'popstate' && event.id > 1) {
            console.log($('.main-wrapper'));
            this.mainTitleService.setNavType('back');
          } else{
            this.mainTitleService.setNavType('forward');
          }

          // This "restoredState" property is defined when the navigation
          // event is triggered by a "popstate" event (ex, back / forward
          // buttons). It will contain the ID of the earlier navigation event
          if (event.restoredState) {
            console.warn(
              'restoring navigation id:',
              event.restoredState.navigationId
            );
          }
          console.groupEnd();
        }
      )
      ;
  }
  ngOnInit(): void { }
}
