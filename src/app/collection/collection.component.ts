import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this!

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule], // Add this!
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  images = [
    { src: 'assets/images/jewelry1.webp', alt: 'Gold Necklace' },
    { src: 'assets/images/bracelet1.webp', alt: 'Handmade Bracelet' },
    { src: 'assets/images/necklace1.webp', alt: 'Elegant Pearl Necklace' },
    { src: 'assets/images/jewelry2.webp', alt: 'Silver Earrings' },
    { src: 'assets/images/jewelry1.webp', alt: 'Gold Necklace' },
    { src: 'assets/images/bracelet1.webp', alt: 'Handmade Bracelet' },
    { src: 'assets/images/necklace1.webp', alt: 'Elegant Pearl Necklace' },
    { src: 'assets/images/jewelry2.webp', alt: 'Silver Earrings' },
    { src: 'assets/images/necklace1.webp', alt: 'Elegant Pearl Necklace' },
    { src: 'assets/images/jewelry2.webp', alt: 'Silver Earrings' },
  ];
}
