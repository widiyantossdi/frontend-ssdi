
export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface NewsArticle {
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  fullContent: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
