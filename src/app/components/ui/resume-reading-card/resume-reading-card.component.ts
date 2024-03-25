import { Component, Input } from '@angular/core';
import { ResumeReading } from '../../../../types';

@Component({
  selector: 'resume-reading-card',
  standalone: true,
  imports: [],
  templateUrl: './resume-reading-card.component.html',
  styleUrl: './resume-reading-card.component.css',
})
export class ResumeReadingCardComponent {
  @Input() cardData!: ResumeReading;
}
