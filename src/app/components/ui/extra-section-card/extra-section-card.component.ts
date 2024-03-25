import { Component, Input } from '@angular/core';
import { ExtraCard } from '../../../../types';

@Component({
  selector: 'extra-section-card',
  standalone: true,
  imports: [],
  templateUrl: './extra-section-card.component.html',
  styleUrl: './extra-section-card.component.css',
})
export class ExtraSectionCardComponent {
  @Input() cardData!: ExtraCard;
}
