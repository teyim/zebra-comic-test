import { Component, Input } from '@angular/core';
import { BookCardComponent } from '../../components/ui/book-card/book-card.component';
import { RecommendedBook } from '../../../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'card-section',
  standalone: true,
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.css',
  imports: [BookCardComponent, NgFor],
})
export class CardSectionComponent {
  @Input() sectionTitle!: String;

  recommendedBooksData: RecommendedBook[] = [
    {
      statusText: 'NEW TODAY',
      title: 'Chronicles of Totemism',
    },
    {
      title: 'Picaso and the First Dragon',
    },
    {
      statusText: 'NEW THIS WEEK',
      title: 'Doors or Windows?',
    },
    {
      title: 'Retrograde',
    },
    {
      title: 'Alice and The Chapters of Winterfel',
    },
  ];
}
