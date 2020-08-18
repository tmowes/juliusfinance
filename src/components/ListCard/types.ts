export interface TickerProps {
  id: string
  ticker: string
  quantity: number
  price: number
}

export interface TickerDTO {
  tickerDetails: TickerProps
}
