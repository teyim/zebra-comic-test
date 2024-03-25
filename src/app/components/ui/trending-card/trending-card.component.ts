import { Component, Input } from '@angular/core';
import { trendingCard } from '../../../../types';
import { NgFor, NgIf } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'trending-card',
  standalone: true,
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.css',
  imports: [NgIf, NgFor, BadgeComponent],
})
export class TrendingCardComponent {
  @Input() bookData!: trendingCard;
}
