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
    { src: '', alt: 'Gold Necklace' },
    { src: '', alt: 'Handmade Bracelet' },
    { src: '', alt: 'Elegant Pearl Necklace' },
    { src: '', alt: 'Silver Earrings' },
    { src: '', alt: 'Gold Necklace' },
    { src: '', alt: 'Handmade Bracelet' },
    { src: '', alt: 'Elegant Pearl Necklace' },
    { src: '', alt: 'Silver Earrings' },
    { src: '', alt: 'Elegant Pearl Necklace' },
    { src: '', alt: 'Silver Earrings' },
  ];

  scrollToAbout(): void {
    const collectionElement = document.getElementById('about');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  } 
}
