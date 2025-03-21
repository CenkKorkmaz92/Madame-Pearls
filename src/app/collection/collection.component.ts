// collection.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  isModalOpen = false;
  selectedCategory: any = {};

  categories = [
    {
      label: 'Gentlemen',
      imgSrc: '../../assets/images/collection/men/men_6.webp',
      "images": [
        "../../assets/images/collection/men/men_1.webp",
        "../../assets/images/collection/men/men_2.webp",
        "../../assets/images/collection/men/men_3.webp",
        "../../assets/images/collection/men/men_4.webp",
        "../../assets/images/collection/men/men_5.webp",
        "../../assets/images/collection/men/men_6.webp",
        "../../assets/images/collection/men/men_7.webp"
      ]
    },
    {
      label: 'Ladys',
      imgSrc: '../../assets/images/collection/women/women_3.webp',
      images: [
        "../../assets/images/collection/women/women_1.webp",
        "../../assets/images/collection/women/women_2.webp",
        "../../assets/images/collection/women/women_3.webp",
        "../../assets/images/collection/women/women_4.webp",
        "../../assets/images/collection/women/women_5.webp",
        "../../assets/images/collection/women/women_6.webp",
        "../../assets/images/collection/women/women_7.webp",
        "../../assets/images/collection/women/women_8.webp",
        "../../assets/images/collection/women/women_9.webp",
        "../../assets/images/collection/women/women_10.webp",
        "../../assets/images/collection/women/women_11.webp",
        "../../assets/images/collection/women/women_12.webp",
        "../../assets/images/collection/women/women_13.webp",
        "../../assets/images/collection/women/women_14.webp",
        "../../assets/images/collection/women/women_15.webp",
        "../../assets/images/collection/women/women_16.webp",
        "../../assets/images/collection/women/women_17.webp"
      ],
    },
    {
      label: 'Kids',
      imgSrc: '../../assets/images/collection/kids/kids_1.webp',
      images: ['assets/images/kids1.jpg', 'assets/images/kids2.jpg', 'assets/images/kids3.jpg'],
    },
    {
      label: 'For Everyone',
      imgSrc: '../../assets/images/collection/necklace/necklace_1.webp',
      images: [
        '../../assets/images/collection/necklace/necklace_1.webp',
        '../../assets/images/collection/necklace/necklace_2.webp',
        '../../assets/images/collection/necklace/necklace_3.webp',
        '../../assets/images/collection/necklace/necklace_4.webp'
      ],
    },
  ];

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.closeModal$.subscribe(() => {
      if (this.isModalOpen) {
        this.closeModal();
      }
    });
  }

  scrollToAbout(): void {
    const collectionElement = document.getElementById('about');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal(category: any): void {
    this.selectedCategory = category;
    this.isModalOpen = true;
    document.documentElement.style.overflow = 'hidden'; // Prevents background scrolling
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.documentElement.style.overflow = ''; // Restore scrolling
    document.body.style.overflow = '';
  }
}