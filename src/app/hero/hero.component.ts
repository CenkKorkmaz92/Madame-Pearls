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
  currentIndex1: number = 0;
  currentIndex2: number = 0;
  currentIndex3: number = 0;
  interval1!: any;
  interval2!: any;
  interval3!: any;

  images1: string[] = [
    '../../assets/images/material_1.webp',
    '../../assets/images/material_2.webp',
    '../../assets/images/material_3.webp'
  ];

  images2: string[] = [
    '../../assets/images/bracelet_1.jpg',
    '../../assets/images/bracelet_2.jpg',
    '../../assets/images/bracelet_3.jpg'
  ];

  images3: string[] = [
    '../../assets/images/men_1.webp',
    '../../assets/images/women_1.webp',
    '../../assets/images/kids_1.webp'
  ];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearIntervals();
  }

  startAutoSlide(): void {
    this.clearIntervals(); // Clear existing intervals to avoid duplicates

    // Run outside Angular's change detection to prevent hydration issues
    this.ngZone.runOutsideAngular(() => {
      this.interval1 = setInterval(() => this.ngZone.run(() => this.moveSlide(1, 1)), 8000);
      this.interval2 = setInterval(() => this.ngZone.run(() => this.moveSlide(2, 1)), 8000);
      this.interval3 = setInterval(() => this.ngZone.run(() => this.moveSlide(3, 1)), 8000);
    });
  }

  clearIntervals(): void {
    if (this.interval1) clearInterval(this.interval1);
    if (this.interval2) clearInterval(this.interval2);
    if (this.interval3) clearInterval(this.interval3);
  }

  moveSlide(carousel: number, step: number): void {
    let totalSlides: number;
    let currentIndexRef: 'currentIndex1' | 'currentIndex2' | 'currentIndex3';

    if (carousel === 1) {
      totalSlides = this.images1.length;
      currentIndexRef = 'currentIndex1';
    } else if (carousel === 2) {
      totalSlides = this.images2.length;
      currentIndexRef = 'currentIndex2';
    } else if (carousel === 3) {
      totalSlides = this.images3.length;
      currentIndexRef = 'currentIndex3';
    } else {
      return;
    }

    this[currentIndexRef] = (this[currentIndexRef] + step) % totalSlides;
  }

  setSlide(carousel: number, index: number): void {
    if (carousel === 1) {
      this.currentIndex1 = index;
    } else if (carousel === 2) {
      this.currentIndex2 = index;
    } else if (carousel === 3) {
      this.currentIndex3 = index;
    }
  }
}
