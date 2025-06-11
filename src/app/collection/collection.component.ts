import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../favorites.service';
import { ModalService } from '../modal.service'; // <--- NEU
import { TranslationService } from '../translation.service';

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

  categories: Array<{ label: string; imgSrc: string; images: string[] }> = [];

  favoriteImages: string[] = [];
  readonly MAX_FAVORITES = 5;

  constructor(
    private favoritesService: FavoritesService,
    private modalService: ModalService, // <--- NEU
    public translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe(favs => {
      this.favoriteImages = favs;
    });
    this.setCategoryLabels();
    this.translationService.languageChanged$.subscribe(() => {
      this.setCategoryLabels();
    });
  }

  setCategoryLabels() {
    this.categories = [
      {
        label: this.translationService.t('collection.men'),
        imgSrc: '../../assets/images/collection/men/men_6.webp',
        images: [
          '../../assets/images/collection/men/men_1.webp',
          '../../assets/images/collection/men/men_2.webp',
          '../../assets/images/collection/men/men_3.webp',
          '../../assets/images/collection/men/men_4.webp',
          '../../assets/images/collection/men/men_5.webp',
          '../../assets/images/collection/men/men_6.webp',
          '../../assets/images/collection/men/men_7.webp'
        ]
      },
      {
        label: this.translationService.t('collection.women'),
        imgSrc: '../../assets/images/collection/women/women_3.webp',
        images: [
          '../../assets/images/collection/women/women_1.webp',
          '../../assets/images/collection/women/women_2.webp',
          '../../assets/images/collection/women/women_3.webp',
          '../../assets/images/collection/women/women_4.webp',
          '../../assets/images/collection/women/women_5.webp',
          '../../assets/images/collection/women/women_6.webp',
          '../../assets/images/collection/women/women_7.webp',
          '../../assets/images/collection/women/women_8.webp',
          '../../assets/images/collection/women/women_9.webp',
          '../../assets/images/collection/women/women_10.webp',
          '../../assets/images/collection/women/women_11.webp',
          '../../assets/images/collection/women/women_12.webp',
          '../../assets/images/collection/women/women_13.webp',
          '../../assets/images/collection/women/women_14.webp',
          '../../assets/images/collection/women/women_15.webp',
          '../../assets/images/collection/women/women_16.webp',
          '../../assets/images/collection/women/women_17.webp'
        ]
      },
      {
        label: this.translationService.t('collection.kids'),
        imgSrc: '../../assets/images/collection/kids/kids_1.webp',
        images: [
          'assets/images/kids1.jpg',
          'assets/images/kids2.jpg',
          'assets/images/kids3.jpg'
        ]
      },
      {
        label: this.translationService.t('collection.necklace'),
        imgSrc: '../../assets/images/collection/necklace/necklace_1.webp',
        images: [
          '../../assets/images/collection/necklace/necklace_1.webp',
          '../../assets/images/collection/necklace/necklace_2.webp',
          '../../assets/images/collection/necklace/necklace_3.webp',
          '../../assets/images/collection/necklace/necklace_4.webp'
        ]
      }
    ];
  }

  ngDoCheck() {}

  scrollToAbout(): void {
    const collectionElement = document.getElementById('about');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal(category: any): void {
    this.selectedCategory = category;
    this.isModalOpen = true;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    this.modalService.setModalOpen(true); // <--- HIER
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    this.modalService.setModalOpen(false); // <--- HIER
  }

  toggleFavorite(imgUrl: string, event: Event): void {
    event.stopPropagation();
    const idx = this.favoriteImages.indexOf(imgUrl);

    if (idx > -1) {
      this.favoriteImages.splice(idx, 1);
    } else {
      if (this.favoriteImages.length >= this.MAX_FAVORITES) {
        alert(`Du kannst maximal ${this.MAX_FAVORITES} Favoriten auswählen.`);
        return;
      }
      this.favoriteImages.push(imgUrl);
    }
    this.syncFavorites();
  }

  isFavorite(imgUrl: string): boolean {
    return this.favoriteImages.includes(imgUrl);
  }

  syncFavorites() {
    this.favoritesService.setFavorites(this.favoriteImages);
  }
}
