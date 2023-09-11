export interface ICar {
  _id: string
  model: string
  image: string
  range: string
  top_speed: string
  mph: string
}

export interface ICarInfo {
  car: ICar
}
