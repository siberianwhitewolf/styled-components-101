export interface Item {
  title: string;
  img: {
    src: string;
    alt: string;
  };
}

export interface ICarouselElement {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  systemText?: string;
  href: string;
  price?: string;
  heart?: boolean;
}
