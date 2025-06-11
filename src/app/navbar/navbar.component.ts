import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../modal.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  dropdownOpen = false;
  selectedLanguage = 'en';
  selectedLanguageLabel = '🇺🇸 English';
  modalIsOpen = false; // <--- NEU

  constructor(public modalService: ModalService, public translationService: TranslationService) {
    // <--- REAGIERT AUF MODALSTATUS
    this.modalService.modalOpen$.subscribe(open => {
      this.modalIsOpen = open;
    });
    this.translationService.setLanguage(this.selectedLanguage);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.dropdownOpen = false;
    switch (lang) {
      case 'en':
        this.selectedLanguageLabel = '🇺🇸 English';
        break;
      case 'de':
        this.selectedLanguageLabel = '🇩🇪 Deutsch';
        break;
      case 'gr':
        this.selectedLanguageLabel = '🇬🇷 Ελληνικά';
        break;
      case 'hr':
        this.selectedLanguageLabel = '🇭🇷 Hrvatski';
        break;
    }
    this.translationService.setLanguage(lang);
    console.log(`Language changed to: ${this.selectedLanguage}`);
  }

  onNavbarButtonClick() {
    this.modalService.triggerCloseModal();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const dropdown = document.querySelector('.custom-select');
    const dropdownMenu = document.querySelector('.dropdown-options');
    if (dropdown && dropdownMenu) {
      if (
        !dropdown.contains(event.target as Node) &&
        !dropdownMenu.contains(event.target as Node)
      ) {
        this.dropdownOpen = false;
      }
    }
  }

  scrollToHome(): void {
    const collectionElement = document.getElementById('home');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
