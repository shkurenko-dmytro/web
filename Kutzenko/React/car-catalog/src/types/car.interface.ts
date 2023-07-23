export interface ICar {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface ICarData extends Omit<ICar, "id"> {}
