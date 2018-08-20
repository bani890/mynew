const express = require('express');

const app = express();

app.get('/api/solardata', (req, res) => {
  const solardata = [
    {
      "year": 2017,
      "month": 4,
      "kwh": 1000,
      "bill": 124.04,
      "savings": 12.99
    },
    {
      "year": 2017,
      "month": 3,
      "kwh": 730,
      "bill": 94.14,
      "savings": 2.99
    },
    {
      "year": 2017,
      "month": 2,
      "kwh": 500,
      "bill": 70.04,
      "savings": 1.32
    },
    {
      "year": 2017,
      "month": 1,
      "kwh": 750,
      "bill": 73.29,
      "savings": 3.49
    },
    {
      "year": 2016,
      "month": 12,
      "kwh": 1500,
      "bill": 144.04,
      "savings": 19.81
    },
  ]


  res.json(solardata);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);