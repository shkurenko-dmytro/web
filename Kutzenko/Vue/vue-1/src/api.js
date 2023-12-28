const API_KEY = '55a9c539ee9816da70d976e89f7eace3be513a5c48248aad59110e3cf60f2f57'
const AGGREGATE_INDEX = '5'
const INVALID_SUB_INDEX = '500'

const tickerHandlers = new Map()
const socket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`)

socket.addEventListener('message', (e) => {
  const { TYPE: type, FROMSYMBOL: currency, PRICE: newPrice, PARAMETER: parameter} = JSON.parse(e.data)

  if (type !== AGGREGATE_INDEX && type !== INVALID_SUB_INDEX) {
    return
  }
  
  let currentCurrency = currency

  if(type === INVALID_SUB_INDEX) {
    currentCurrency = parameter.split('~')[2]
  }

  if(!tickerHandlers.get(currentCurrency)) {
    return
  }

  const handlers = tickerHandlers.get(currentCurrency)
  const isValidSub = type !== INVALID_SUB_INDEX

  handlers.forEach((handler) => {
    handler(newPrice, isValidSub)
  })
})

function sendToWebSockets(msg) {
  const message = JSON.stringify(msg)

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(message)
    return
  }

  socket.addEventListener(
    'open',
    () => {
      socket.send(message)
    },
    { once: true }
  )
}

function subscribeToTickerOnWs(ticker) {
  sendToWebSockets({
    action: 'SubAdd',
    subs: [`${AGGREGATE_INDEX}~CCCAGG~${ticker}~USD`]
  })
}

function unSubscribeToTickerOnWs(ticker) {
  sendToWebSockets({
    action: 'SubRemove',
    subs: [`${AGGREGATE_INDEX}~CCCAGG~${ticker}~USD`]
  })
}

export const subscribeToTicker = (ticker, cb) => {
  const subscribers = tickerHandlers.get(ticker) || []
  tickerHandlers.set(ticker, [...subscribers, cb])
  
  subscribeToTickerOnWs(ticker)
}

export const unSubscribeToTicker = (ticker) => {
  tickerHandlers.delete(ticker)

  unSubscribeToTickerOnWs(ticker)
}

export const getAllCoins = async (cb) => {
  fetch('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')
    .then((response) => response.json())
    .then((data) => {
      cb(data.Data)
    })
}
