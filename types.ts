
export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface NewsArticle {
  imageUrl: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
