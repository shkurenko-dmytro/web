interface ICar {
  id?: number
  name?: string
  price?: number
  yearBuilt?: number
}

interface ICarCreate extends Omit<ICar, "id"> {}
interface ICarId extends Pick<ICar, "id"> {}

interface IOptionalCar extends Partial<ICar> {}
interface IReadonlyCar extends Readonly<ICar> {}
interface IRequiredCar extends Required<ICar> {}

type TypeCarRecord = Record<"name" | "price", string | number>

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

type Any = Extract<"max" | "andrey", "andrey" | "misha">
type First = Exclude<"max" | "andrey", "andrey" | "misha">
type NotNull = NonNullable<string | number | null | undefined>

// const car: IRequiredCar = {}
