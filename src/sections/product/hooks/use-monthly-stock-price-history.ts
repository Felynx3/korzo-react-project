import { useState, useEffect } from 'react';

import { StocksApi } from '../api/stocks-api';

import type { MonthlyStockHistory } from '../../stock/types/monthly-stock-history';

// TODO: This should be implemented in a separate file to be used by other use cases
export enum FetchStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

interface UseMonthlyStockPriceHistoryType {
  monthlyStockHistory?: MonthlyStockHistory;
  status: FetchStatus;
}

export function useMonthlyStockPriceHistory(name: string): UseMonthlyStockPriceHistoryType {
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Loading);
  const [monthlyStockHistory, setMonthlyStockHistory] = useState<MonthlyStockHistory>();

  useEffect(() => {
    if (monthlyStockHistory?.name === name) {
      return;
    }

    setStatus(FetchStatus.Loading);

    StocksApi.getMonthlyStockPrice(name)
      .then((result) => {
        setMonthlyStockHistory(result);
        setStatus(FetchStatus.Success);
      })
      .catch(() => {
        setStatus(FetchStatus.Error);
      });
  }, [name, monthlyStockHistory]);

  return { monthlyStockHistory, status };
}
