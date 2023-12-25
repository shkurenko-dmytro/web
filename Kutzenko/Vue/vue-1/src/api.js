const API_KEY = '55a9c539ee9816da70d976e89f7eace3be513a5c48248aad59110e3cf60f2f57'
const AGGREGATE_INDEX = '5'

const tickerHandlers = new Map()
const socket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`)

socket.addEventListener('message', (e) => {
  const { TYPE: type, FROMSYMBOL: currency, PRICE: newPrice } = JSON.parse(e.data)

  if (type !== AGGREGATE_INDEX || newPrice === undefined) {
    return
  }

  const handlers = tickerHandlers.get(currency)

  handlers.forEach((handler) => {
    handler(newPrice)
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
