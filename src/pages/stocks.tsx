import { Helmet } from 'react-helmet-async';

import { StocksView } from '../sections/stock/view';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Stocks</title>
      </Helmet>

      <StocksView />
    </>
  );
}
