import { MainTitleService } from '@src/app/services/main-title.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '@src/app/services/translation.service';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  formGroup: FormGroup;
  translate: TranslateService;
  constructor(
    public translationService: TranslationService,
    private formBuilder: FormBuilder,
    private mainTitleService: MainTitleService
  ) {  }

  ngOnInit() {
    this.createForm();
    this.translate = this.translationService.getTranslateService();
    this.mainTitleService.setTitle(this.translate.instant('user-menu-preferences'));
    this.mainTitleService.setSubTitle('');
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'language': ['', Validators.required],
    });
    console.log(this.translationService.getActiveLang());
    this.formGroup.patchValue({ username: 'Eloise Wilson' });
    this.formGroup.patchValue({ password: 'eloise' });
    this.formGroup.patchValue({ language: this.translationService.getActiveLang() });
  }

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

  onSubmit(post) {
    // this.post = post;
    console.log('post', post);
    console.log(this.formGroup);
    this.translationService.changeLanguage(post.language);
  }
}
