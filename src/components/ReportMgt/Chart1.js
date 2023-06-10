import { colors } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { useState } from 'react';

import ReactApexChart from 'react-apexcharts'

export default function Chart1() {
    const [state, setState] = useState({
        series: [{
            name: 'Non working days',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
            color: '#C5C5C5'
        }, {
            name: 'Remaining values',
            type: 'line',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'Guideline',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
            color: '#ff0000'
        }],
        options: {
            chart: {
                height: 500,
                type: 'line',
                stacked: false,
            },
            stroke: {
                width: [0, 3, 3],
                curve: 'stepline'
            },
            plotOptions: {
                bar: {
                    columnWidth: '100%'
                }
            },

            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'days'
            },
            yaxis: {
                title: {
                    text: 'Story Points',
                },
                min: 0
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            }
        }
    })

    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="line"
                height={350}
            />
        </div>
    )
}

