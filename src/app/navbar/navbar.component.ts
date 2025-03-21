// navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../modal.service';

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

  constructor(private modalService: ModalService) { }

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
        this.selectedLanguageLabel = '🇩🇪 German';
        break;
      case 'gr':
        this.selectedLanguageLabel = '🇬🇷 Greek';
        break;
      case 'hr':
        this.selectedLanguageLabel = '🇭🇷 Kroatisch';
        break;
    }
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
}
