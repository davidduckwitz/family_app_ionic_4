import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  actualLanguage: string;
  Langs = [
    {
      name: 'Deutsch',
      blang: 'de-DE',
      flag: 'DE'
    },
    {
      name: 'English',
      blang: 'en-GB',
      flag: 'GB'
    },
    {
      name: 'Russian',
      blang: 'ru-RU',
      flag: 'RU'
    },
    {
      name: 'Armenian',
      blang: 'am-AM',
      flag: 'AM'
    }
  ];
  constructor(public translate: TranslateService) {
    this.actualLanguage = localStorage.getItem('language');
  }

  ngOnInit() {
  }

  onLangChange(lang: string) {
    if(this.actualLanguage === null){
      this.actualLanguage = 'en';
    } else {
      this.translate.use(lang);
    }
    localStorage.setItem('language', lang);
    this.actualLanguage = lang;
     console.log(lang);
  }

}
