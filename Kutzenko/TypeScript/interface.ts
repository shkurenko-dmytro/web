interface IUserAge {
  age: number
}

interface IUser extends IUserAge {
  name: string
  email: string
}

type TypePerson = {
  age: number
}

type TypeUser = {
  name: string
  email: string
} & TypePerson

const user: IUser = {
  email: "asdsadasdd@asdasda",
  name: "Max",
  age: 20
}