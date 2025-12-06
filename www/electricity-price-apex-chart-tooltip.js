window.electricityPriceApexChartTooltip = function({ series, seriesIndex, dataPointIndex, w }) {
  try {
    const sell = Number(series[0]) || 0;
    const spot = Number(series[1]) || 0;
    const buy  = Number(series[2]) || 0;

    return `
      <div style="padding:5px">
        <strong style="color:green">Výroba:</strong> ${sell.toFixed(2)} Kč/kWh<br>
        <strong style="color:orange">Spot:</strong> ${(sell+spot).toFixed(2)} Kč/kWh<br>
        <strong style="color:red">Spotřeba:</strong> ${(sell+spot+buy).toFixed(2)} Kč/kWh
      </div>
    `;
  } catch(e) {
    return '';
  }
};
