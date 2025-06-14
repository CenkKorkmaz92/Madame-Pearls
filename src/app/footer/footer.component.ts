import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public translationService: TranslationService) {}

  scrollToHome(): void {
    const collectionElement = document.getElementById('home');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
