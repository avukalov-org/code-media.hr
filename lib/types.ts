export type Service = {
  title: string;
  description: string;
};

export type Product = {
  title: string;
  shortTitle: string;
  slug: string;
  image: string;
  price: string;
  infos: string[];
  req?: string[];
};
