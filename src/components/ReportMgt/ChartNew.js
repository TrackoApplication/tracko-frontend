'use strict';

import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const ChartExample = () => {
  const [options, setOptions] = useState({
    title: {
      text: 'Race demographics',
    },
    data: getData(),
    series: [
      {
        type: 'histogram',
        xKey: 'age',
        xName: 'Participant Age',
      },
    ],
    legend: {
      enabled: false,
    },
    axes: [
      {
        type: 'number',
        position: 'bottom',
        title: { text: 'Age band (years)' },
        tick: { interval: 2 },
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'Number of participants' },
      },
    ],
  });

  return <AgChartsReact options={options} />;
};