type TypeChannelReturn = {
  name: string
}

function getChannel(name: string): TypeChannelReturn {
  return { name }
}

type TypeChannelFunction = (name: string) => TypeChannelReturn

const getChannelName: TypeChannelReturn = (name) => {
  return { name }
}

const getNumbers = (...numbers: number[]) => {
  return numbers
}

//Перегрузки
function getCar(name: string): string
function getCar(name: string, price: number): string

function getCar(name: string, price?: number): string {
  return price ? `Назва ${name}, Ціна ${price}` : `Назва ${name}`
}

const car1 = getCar('bm2')
const car2 = getCar('bm2', 100000)