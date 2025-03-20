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

  carousels = [
    {
      images: [
        './assets/images/materials/material_1.webp',
        './assets/images/materials/material_2.webp',
        './assets/images/materials/material_3.webp'
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
        './assets/images/women/women_1.webp',
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
          this.ngZone.run(() => this.moveSlide(index, 1));
        }, 8000);
      });
    });
  }

  clearIntervals(): void {
    this.intervals.forEach(interval => clearInterval(interval));
  }

  moveSlide(carouselIndex: number, step: number): void {
    const totalSlides = this.carousels[carouselIndex].images.length;
    this.currentIndexes[carouselIndex] = (this.currentIndexes[carouselIndex] + step) % totalSlides;
  }

  setSlide(carouselIndex: number, index: number): void {
    this.currentIndexes[carouselIndex] = index;
  }
}
