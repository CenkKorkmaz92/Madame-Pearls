import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  currentIndex: number = 0;
  images: string[] = [
    '../../assets/images/bracelet_1.jpg',
    '../../assets/images/bracelet_2.jpg',
    '../../assets/images/bracelet_3.jpg'
  ];

  moveSlide(step: number): void {
    const totalSlides = this.images.length;
    this.currentIndex += step;

    if (this.currentIndex < 0) {
      this.currentIndex = totalSlides - 1;
    }

    if (this.currentIndex >= totalSlides) {
      this.currentIndex = 0;
    }
  }
}
