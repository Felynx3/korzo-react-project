import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { Chart, useChart } from 'src/components/chart';

import { FetchStatus, useMonthlyStockPriceHistory } from './hooks/use-monthly-stock-price-history';

// ----------------------------------------------------------------------

interface AnalyticsStockPriceProps {
  name: string;
}

export function AnalyticsMonthlyStockPrice({ name }: AnalyticsStockPriceProps) {
  const { monthlyStockHistory, status } = useMonthlyStockPriceHistory(name);

  const theme = useTheme();

  const chartOptions = useChart({
    colors: [theme.palette.primary.dark],
    stroke: {
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: monthlyStockHistory?.monthPrices.map(({ month }) => monthsNames[month - 1]),
    },
    legend: {
      show: true,
    },
    tooltip: {
      y: {
        formatter: (value: number) => `${value} USD`,
      },
    },
  });

  if (status === FetchStatus.Loading) {
    return <div>Loading...</div>;
  }

  if (status === FetchStatus.Error || !monthlyStockHistory) {
    return <Card>Error loading {name}&apos;s stock price history</Card>;
  }

  return (
    <Card>
      <CardHeader
        title={monthlyStockHistory.name}
        subheader="end-of-day price for the last 12 months"
      />

      <Chart
        type="bar"
        series={[
          {
            name: 'Price',
            data: monthlyStockHistory.monthPrices.map(({ price }) => price),
          },
        ]}
        options={chartOptions}
        height={364}
        sx={{ py: 2.5, pl: 1, pr: 2.5 }}
      />
    </Card>
  );
}

const monthsNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
