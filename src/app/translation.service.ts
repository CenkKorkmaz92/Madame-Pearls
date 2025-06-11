import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLang = 'en';
  private translations: any = {};

  async setLanguage(lang: string) {
    this.currentLang = lang;
    const module = await import(`../i18n/${lang}.json`);
    this.translations = module.default || module;
  }

  t(key: string): string {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), this.translations) || key;
  }

  getCurrentLang() {
    return this.currentLang;
  }
}
