export interface MonthlyStockHistory {
  name: string;
  displayName: string;
  monthPrices: MonthStockPrice[];
}

export interface MonthStockPrice {
  month: number;
  price: number;
}
