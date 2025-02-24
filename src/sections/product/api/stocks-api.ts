import { MonthlyStockHistory } from '../../stock/types/monthly-stock-history';

export const StocksApi = {
  getMonthlyStockPrice: async (name: string): Promise<MonthlyStockHistory> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (name === 'AAPL') {
      return appleStock;
    }

    // TODO: It should throw a custom error and be handled to show a human-readable message
    throw new Error('Stock not found');
  },
};

const appleStock = {
  name: 'AAPL',
  displayName: 'AAPL (Apple Inc.)',
  monthPrices: [
    { month: 5, price: 132.5 },
    { month: 6, price: 130.5 },
    { month: 7, price: 135.5 },
    { month: 8, price: 140.5 },
    { month: 9, price: 145.5 },
    { month: 10, price: 150.5 },
    { month: 11, price: 155.5 },
    { month: 12, price: 160.5 },
    { month: 1, price: 165.5 },
    { month: 2, price: 170.5 },
    { month: 3, price: 175.5 },
    { month: 4, price: 180.5 },
  ],
};
