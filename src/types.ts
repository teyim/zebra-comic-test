export enum Categories {
  Romance = 'Romance',
  Fantasy = 'Fantasy',
  SOL = 'Slice of Life',
  Action_Adventure = 'Action & Adventure',
  Drama = 'Drama',
  ScienceFiction = 'Science Fiction',
  Comedy = 'Comedy',
  Horror = 'Horror',
  SuperNatural = 'Supernatural',
  SuperHero = 'Superhero',
  Mystery = 'Mystery',
  Thriller = 'Thriller',
  // Other categories...
}

export type HeaderBook = {
  imgUrl: string;
  alt: string;
  progress?: number;
};

export type RecommendedBook = {
  imgUrl?: string;
  statusText?: string;
  title: string;
};

export type ResumeReading = {
  title: string;
  episode: number;
  progress: number;
};

export type ExtraCard = {
  imgUrl: string;
  titleImgUrl: string;
  price: number;
  desc: string;
  date: {
    month: string;
    day: string;
  };
  ringColor: string;
};

export type ZebraKidsCard = {
  bgImageUrl?: string;
  title: string;
  isNewToday?: boolean;
};

export type TopSeriesCard = {
  imgUrl?: string;
  title: string;
  views: number;
  rank: number;
};

export type trendingCard = {
  imgUrl?: string;
  rank: string;
  isNew?: boolean;
  categories: string[];
  title: string;
  views: number;
};

export type BookGenre = {
  title: Categories;
  img: string;
};

export type navItem = {
  title: string;
  icon: string;
};
