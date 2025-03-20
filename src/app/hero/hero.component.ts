import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  currentIndexes = [0, 0, 0];
  intervals: any[] = [];
  userInteracted = [false, false, false];
  resumeTimers: any[] = [];

  carousels = [
    {
      images: [
        './assets/images/materials/material_1.webp',
        './assets/images/materials/santorini.jpg',
        './assets/images/materials/santorini_view.jpg'
      ],
      alt: 'Volcano Material'
    },
    {
      images: [
        './assets/images/showcase/showcase_1.jpg',
        './assets/images/showcase/showcase_2.jpg',
        './assets/images/showcase/showcase_3.jpg'
      ],
      alt: 'Jewelry Showcase'
    },
    {
      images: [
        './assets/images/men/men_7.webp',
        './assets/images/women/women_2.webp',
        './assets/images/kids/kids_1.webp'
      ],
      alt: 'Bracelet Collection'
    }
  ];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearIntervals();
  }

  startAutoSlide(): void {
    this.clearIntervals();
    this.ngZone.runOutsideAngular(() => {
      this.carousels.forEach((_, index) => {
        this.intervals[index] = setInterval(() => {
          if (!this.userInteracted[index]) {
            this.ngZone.run(() => this.moveSlide(index, 1));
          }
        }, 8000);
      });
    });
  }

  clearIntervals(): void {
    this.intervals.forEach(interval => clearInterval(interval));
    this.resumeTimers.forEach(timer => clearTimeout(timer));
  }

  moveSlide(carouselIndex: number, step: number): void {
    const totalSlides = this.carousels[carouselIndex].images.length;
    this.currentIndexes[carouselIndex] = (this.currentIndexes[carouselIndex] + step + totalSlides) % totalSlides;
  }

  setSlide(carouselIndex: number, index: number): void {
    this.currentIndexes[carouselIndex] = index;
    this.userInteracted[carouselIndex] = true;
    this.resetAutoSlide(carouselIndex);
  }

  resetAutoSlide(carouselIndex: number): void {
    clearTimeout(this.resumeTimers[carouselIndex]);
    this.resumeTimers[carouselIndex] = setTimeout(() => {
      this.userInteracted[carouselIndex] = false;
    }, 15000);
  }

  scrollToCollection(): void {
    const collectionElement = document.getElementById('collection');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }  
}
