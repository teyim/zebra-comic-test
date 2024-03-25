import { Component, Input } from '@angular/core';
import { ZebraKidsCard } from '../../../../types';
import { NgIf } from '@angular/common';

@Component({
  selector: 'zebrakids-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './zebrakids-card.component.html',
  styleUrl: './zebrakids-card.component.css',
})
export class ZebrakidsCardComponent {
  @Input() cardData!: ZebraKidsCard;
}
