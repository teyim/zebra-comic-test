import { NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { TopSeriesCard } from '../../../../types';

@Component({
  selector: 'top-series-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './top-series-card.component.html',
  styleUrl: './top-series-card.component.css',
})
export class TopSeriesCardComponent {
  @Input() bookData!: TopSeriesCard;
}
