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
