import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import {
  ExtraCard,
  RecommendedBook,
  ResumeReading,
  ZebraKidsCard,
} from '../../types';
import { NgFor, NgIf } from '@angular/common';
import { BookCardComponent } from '../components/ui/book-card/book-card.component';
import { ResumeReadingCardComponent } from '../components/ui/resume-reading-card/resume-reading-card.component';
import { ExtraSectionCardComponent } from '../components/ui/extra-section-card/extra-section-card.component';
import { ZebrakidsCardComponent } from '../components/ui/zebrakids-card/zebrakids-card.component';
import { CardSectionComponent } from '../layout/card-section/card-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    NgFor,
    NgIf,
    HeaderComponent,
    BookCardComponent,
    ResumeReadingCardComponent,
    ExtraSectionCardComponent,
    ZebrakidsCardComponent,
    CardSectionComponent,
  ],
})
export class HomeComponent {
  sections = {
    recommended: 'Recommended to John Snow',
    resume: 'Resume reading',
    extra: 'Extra',
    start: 'Start Here',
    zebraKids: 'Zebra kids',
    romance: 'Romance',
    afro: 'Afro Futurism',
    exclusive: 'Zebra Exlusive',
    topSeries: 'Top Series',
    trending: 'Trending Today',
    adventure: 'Adventure',
    new: 'New Release',
    teen: 'Teen',
    sliceOfLife: 'Slice of life',
    genres: 'Genres',
  };

  resumeReadingData: ResumeReading[] = [
    {
      title: 'The Sting',
      progress: 20,
      episode: 3,
    },
    {
      title: 'Njoku ',
      progress: 20,
      episode: 3,
    },
    {
      title: 'Love at First Fight',
      progress: 20,
      episode: 3,
    },
    {
      title: 'My Breakup Ended the World',
      progress: 20,
      episode: 3,
    },
    {
      title: 'The Artist',
      progress: 20,
      episode: 3,
    },
    {
      title: 'Retrograde',
      progress: 20,
      episode: 3,
    },
  ];

  extraSectionData: ExtraCard[] = [
    {
      imgUrl: 'assets/images/book-covers/cover-4.jpg',
      titleImgUrl: '/assets/images/image-2.png',
      date: {
        day: '01',
        month: 'JAN',
      },
      ringColor: '#E3AA3E',
      desc: 'This is the comic synopsis which is clickable to open more details about it. Let’s add some new text here.',
      price: 35.99,
    },
    {
      imgUrl: 'assets/images/book-covers/cover-3.jpg',
      titleImgUrl: '/assets/images/image-3.png',
      date: {
        day: '02',
        month: 'JAN',
      },
      ringColor: '#E54329',
      desc: 'This is the comic synopsis which is clickable to open more details about it. Let’s add some new text here.',
      price: 35.99,
    },
  ];

  zebraKidsCardData: ZebraKidsCard[] = [
    {
      bgImageUrl: 'assets/images/book-covers/cover-4.jpg',
      title: 'BEASTS OF  TAZETI',
      isNewToday: true,
    },
    {
      title: 'SHORTER HEADING',
    },
    {
      title: 'NOTICE BACKGROUND OVERLAY',
      isNewToday: true,
    },
  ];
}
