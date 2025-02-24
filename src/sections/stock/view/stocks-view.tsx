import { type ReactElement } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { DashboardContent } from '../../../layouts/dashboard';
import { AnalyticsMonthlyStockPrice } from '../analytics-monthly-stock-price';

export function StocksView(): ReactElement {
  return (
    <DashboardContent>
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Stocks
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <AnalyticsMonthlyStockPrice name={'AAPL'} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
