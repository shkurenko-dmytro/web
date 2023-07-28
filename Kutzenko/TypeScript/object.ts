type TypeUser = {
  name: string
  age: number
}

type TypeAdress = {
  city: string
  country: string
}

const user: TypeUser = {
  age: 24,
  name: "Max",
}

const adress: TypeAdress = {
  city: "Dnipro",
  country: "Ukraine",
}

let common: TypeUser & TypeAdress

common = {
  ...user,
  ...adress,
}
