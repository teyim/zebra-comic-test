import { Component, Input } from '@angular/core';
import { RecommendedBook } from '../../../../types';
import { NgIf } from '@angular/common';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  @Input() bookData!: RecommendedBook;
}
