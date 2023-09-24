import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { GLOBAL } from '../global.config';
import { AppLanguage } from '../../app.component';

@Component({
  selector: 'ngx-app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  languages: {label: string, code: string,  isSelected: boolean}[] = [
    {label: 'ENG', code: AppLanguage.en,  isSelected: false},
    {label: 'اردو', code: AppLanguage.ur,  isSelected: false}
  ];
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    let curLang = this.translate.currentLang;
    if(curLang) {
      let index = this.languages.findIndex(lang => lang.code === curLang);
      this.languages[index].isSelected = true;
    }

  }

  onLanguageChange(code: string) {
    GLOBAL.currentLanguage = code;
    this.translate.setDefaultLang(code);
    this.translate.use(code);

    // reset
    let index = this.languages.findIndex(lang => lang.isSelected == true);
    this.languages[index].isSelected = false;

    index = this.languages.findIndex(lang => lang.code === code);
    this.languages[index].isSelected = true;
  }
}
