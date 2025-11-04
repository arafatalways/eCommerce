import type { ReactNode } from "react";

export interface IinfoItems {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ICategoryData {
  title: string;
  img: string;
}

export interface IProductSlice {
  id: number;
  img: string;
  name: string;
  price: number;
}
