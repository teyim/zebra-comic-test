import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { Injectable } from '@angular/core';
import {
  BookGenre,
  Categories,
  ExtraCard,
  RecommendedBook,
  ResumeReading,
  TopSeriesCard,
  ZebraKidsCard,
  navItem,
  trendingCard,
} from '../../types';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { BookCardComponent } from '../components/ui/book-card/book-card.component';
import { ResumeReadingCardComponent } from '../components/ui/resume-reading-card/resume-reading-card.component';
import { ExtraSectionCardComponent } from '../components/ui/extra-section-card/extra-section-card.component';
import { ZebrakidsCardComponent } from '../components/ui/zebrakids-card/zebrakids-card.component';
import { CardSectionComponent } from '../layout/card-section/card-section.component';
import { TopSeriesCardComponent } from '../components/ui/top-series-card/top-series-card.component';
import { TrendingCardComponent } from '../components/ui/trending-card/trending-card.component';
import { BadgeComponent } from '../components/ui/badge/badge.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    NgClass,
    NgFor,
    NgIf,
    HeaderComponent,
    BookCardComponent,
    ResumeReadingCardComponent,
    ExtraSectionCardComponent,
    ZebrakidsCardComponent,
    CardSectionComponent,
    TopSeriesCardComponent,
    TrendingCardComponent,
    BadgeComponent,
    NavbarComponent,
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

  topSeriesCol1Data: TopSeriesCard[] = [
    {
      title: 'The Guy Upstairs and a Longer Title as Such',
      rank: 1,
      views: 680,
    },
    {
      title: 'A Reverie with Nana',
      rank: 2,
      views: 680,
    },
    {
      title: 'Love at First Fight',
      rank: 3,
      views: 680,
    },
  ];

  topSeriesCol2Data: TopSeriesCard[] = [
    {
      title: 'The Guy Upstairs and a Longer Title as Such',
      rank: 1,
      views: 680,
    },
    {
      title: 'The Guy Upstairs and a Longer Title as Such',
      rank: 2,
      views: 680,
    },
    {
      title: 'The Guy Upstairs and a Longer Title as Such',
      rank: 3,
      views: 680,
    },
  ];

  trendingTodayData: trendingCard[] = [
    {
      title: 'Chronicles of Totemism dsllslsls lsl..',
      categories: ['Action', 'Comedy'],
      rank: '01',
      isNew: true,
      views: 10.2,
    },
    {
      title: 'Chronicles of Totemism ',
      categories: ['Action', 'Comedy'],
      rank: '02',
      isNew: true,
      views: 10.2,
    },
    {
      title: 'Chronicles of Totemism ',
      categories: ['Action', 'Comedy'],
      rank: '03',
      isNew: true,
      views: 10.2,
    },
    {
      title: 'Chronicles of Totemism ',
      categories: ['Action', 'Comedy'],
      rank: '04',
      isNew: true,
      views: 10.2,
    },
  ];

  bookGenresData: BookGenre[] = [
    {
      title: Categories.Romance,
      img: 'assets/images/book-covers/image-17.png',
    },
    {
      title: Categories.Horror,
      img: 'assets/images/book-covers/image-11.png',
    },
    {
      title: Categories.Fantasy,
      img: 'assets/images/book-covers/image-6.png',
    },
    {
      title: Categories.ScienceFiction,
      img: 'assets/images/book-covers/image-12.png',
    },
    {
      title: Categories.SOL,
      img: 'assets/images/book-covers/image-7.png',
    },
    {
      title: Categories.SuperNatural,
      img: 'assets/images/book-covers/image-13.png',
    },
    {
      title: Categories.Action_Adventure,
      img: 'assets/images/book-covers/image-8.png',
    },
    {
      title: Categories.SuperHero,
      img: 'assets/images/book-covers/image-14.png',
    },
    {
      title: Categories.Drama,
      img: 'assets/images/book-covers/image-9.png',
    },
    {
      title: Categories.Mystery,
      img: 'assets/images/book-covers/image-15.png',
    },
    {
      title: Categories.Comedy,
      img: 'assets/images/book-covers/image-10.png',
    },
    {
      title: Categories.Thriller,
      img: 'assets/images/book-covers/image-16.png',
    },
  ];

  nextedBookGenreArray: BookGenre[][] = [];

  ngOnInit(): void {
    this.nextedBookGenreArray = this.chunkArray(this.bookGenresData, 2);
  }

  chunkArray(array: any[], size: number): any[][] {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  }
}
