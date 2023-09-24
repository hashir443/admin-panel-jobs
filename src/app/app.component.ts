/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { GLOBAL } from './shared/global.config';

export enum AppLanguage {
  ur = 'urdu',
  en = 'en',
}

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})

export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService,private translate: TranslateService) {
    const sub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        let lang = event.lang;
        // let htmlTag = this.document.getElementsByTagName(
        //   "html"
        // )[0] as HTMLHtmlElement;
        // htmlTag.dir = lang === AppLanguage.ur ? "rtl" : "ltr";
        this.setDefaultLanguage();
        
      }
    );
  }

  ngOnInit(): void {
    this.translate.addLangs([AppLanguage.en, AppLanguage.ur]);
    this.setDefaultLanguage();
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }

  setDefaultLanguage() {
    let currentLang = GLOBAL.currentLanguage;
    currentLang = currentLang != '' ? currentLang : AppLanguage.en;
    this.translate.setDefaultLang(currentLang);
    this.translate.use(currentLang);
    // this.changeCssFile(currentLang);
  }
}
