import React,{useState} from 'react';
import Chart from 'react-apexcharts';
//import React, {PureComponent} from 'react';
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//install : npm install react-apexcharts apexcharts//
function Linechart()
{
    const[product, setProduct]= useState(
        [
            {
                name:"Guideline",
                data:[234,45,67,987,345,456,87,321,300,500,1000,500,300,250]
            },
            {
                name:"Remaining Values",
                data:[1012,345,117,697,845,56,287,1321,300,500,1000,500,450,1000]
            }
        ]
    );

    const [product2, setProduct2] = useState(
        [
            {
                name:"Non-working days",
                data:[562,145,267,97,45,156,87,321,300,500,1000,500,600,350]
            }
        ]
    )

    const[option, setOption]= useState(
        {
            title:{ text:"Burndown Chart"},
            xaxis:{
                title:{text:"Time"},
                categories:['Jan 5','Jan 6','Jan 7','Jan 8',
                'Jan 9','Jan 10','Jan 11','Jan 12',
                'Jan 13','Jan 14','Jan 15','Jan 16','Jan 17','Jan 18']
            },
            yaxis:{
                title:{text:"Story point"}                 
            }

        }
    );

    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3'>         
          <Chart type='line'
          width={1160}
          height={500}
          series={product}
          options={option }
          >
          </Chart>

          <Chart type='bar'
          width={1160}
          height={500}
          series={product2}
          options={option }
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default Linechart;