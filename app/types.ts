export type User = {
  id?: string;
  name?: string | null;
  age?: number | null;
  bio?: string | null;
  phone?: string | null;
  email?: string | null;
  emailVerified?: string | null;
  image?: string | null;
  reviews?: Review[];
};

export type CakeFlavor = {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string | null;
  reviews?: Review[];
};

export type Review = {
  id: number;
  cake_flavor_id: number;
  rating: number;
  comment: string;
  user?: User;
};

export type Fillings = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export type CakeTypes = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export type Styles = {
  id: number;
  name: string;
  price: number;
  description: string;
};
