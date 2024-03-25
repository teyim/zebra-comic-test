import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BookCardComponent } from '../ui/book-card/book-card.component';
import { HeaderBook, RecommendedBook } from '../../../types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, BookCardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  headerBooksData: HeaderBook[] = [
    {
      imgUrl: 'assets/images/book-covers/cover-2.png',
      alt: 'book cover',
      progress: 40,
    },
    {
      imgUrl: 'assets/images/book-covers/cover-1.png',
      alt: 'book cover',
    },
    {
      imgUrl: 'assets/images/book-covers/cover-1.png',
      alt: 'book cover',
    },
    {
      imgUrl: 'assets/images/book-covers/cover-2.png',
      alt: 'book cover',
    },
    {
      imgUrl: 'assets/images/book-covers/cover-2.png',
      alt: 'book cover',
    },
  ];
}
