import React, { useState } from 'react';
import useStockData from './useStockData';

const StockMarket = () => {
  const [symbol, setSymbol] = useState('AAPL'); // Default stock symbol (Apple)
  const { stockData, loading, errorMessage } = useStockData(symbol);

  // Handle symbol change
  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  return (
    <div>
      <h1>Stock Market Data</h1>
      <input
        type="text"
        value={symbol}
        onChange={handleSymbolChange}
        placeholder="Enter stock symbol (e.g., AAPL)"
      />
      {loading && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      {stockData && (
        <div>
          <h2>{symbol} Stock Data</h2>
          <p>Time: {Object.keys(stockData)[0]}</p>
          <p>Open: ${stockData['1. open']}</p>
          <p>High: ${stockData['2. high']}</p>
          <p>Low: ${stockData['3. low']}</p>
          <p>Close: ${stockData['4. close']}</p>
          <p>Volume: {stockData['5. volume']}</p>
        </div>
      )}
    </div>
  );
};

export default StockMarket;
