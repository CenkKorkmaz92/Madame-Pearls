import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 scrollToContact(): void {
    const collectionElement = document.getElementById('contact');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
