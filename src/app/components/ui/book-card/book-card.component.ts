import { Component, Input } from '@angular/core';
import { RecommendedBook } from '../../../../types';
import { NgIf } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'book-card',
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
  imports: [NgIf, BadgeComponent],
})
export class BookCardComponent {
  @Input() bookData!: RecommendedBook;
}
