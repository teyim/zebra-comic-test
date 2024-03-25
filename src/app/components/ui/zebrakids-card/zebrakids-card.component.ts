import { Component, Input } from '@angular/core';
import { ZebraKidsCard } from '../../../../types';
import { NgIf } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'zebrakids-card',
  standalone: true,
  templateUrl: './zebrakids-card.component.html',
  styleUrl: './zebrakids-card.component.css',
  imports: [NgIf, BadgeComponent],
})
export class ZebrakidsCardComponent {
  @Input() cardData!: ZebraKidsCard;
}
