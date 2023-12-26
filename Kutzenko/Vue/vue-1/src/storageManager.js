export const getFromStorage = (item) => {
  const storageItems = localStorage.getItem(item)
  const parsedItems = JSON.parse(storageItems)

  return parsedItems
}

export const saveToStorage = (item, list) => {
  localStorage.setItem(item, JSON.stringify(list))
}