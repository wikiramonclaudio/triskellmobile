import { MainTitleService } from '@src/app/services/main-title.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '@src/app/services/translation.service';
import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
declare var $;
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  translate: TranslateService;
  subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    public translationService: TranslationService,
    private mainTitleService: MainTitleService
  ) {
    this.subscription = this.translationService.getLanguage().subscribe(data => {
      this.translate.use(data.lang);
      this.mainTitleService.setTitle(this.translate.instant('user-menu-preferences'));
    });
  }

  ngOnInit() {
    this.createForm();
    this.translate = this.translationService.getTranslateService();
    this.mainTitleService.setTitle(this.translate.instant('user-menu-preferences'));
    this.mainTitleService.setSubTitle('');
  }

// create form instance
  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'language': ['', Validators.required],
    });
    this.formGroup.patchValue({ username: 'Eloise Wilson' });
    this.formGroup.patchValue({ password: 'eloise' });
    this.formGroup.patchValue({ language: this.translationService.getActiveLang() });
  }

  // manage form errors
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      case 'lang':
        if (this.formGroup.get('language').hasError('required')) {
          return 'Language required';
        }
        break;
      default:
        return '';
    }
  }

  // on send the form
  onSubmit(post) {
    this.translationService.changeLanguage(post.language);
  }

  // update uploaded user img on the screen
  readURL(files) {
    if (files && [0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      };
      reader.readAsDataURL(files[0]);
    }
  }

  // on change input file event
  fileChangeEvent(files) {
    this.readURL(files);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
