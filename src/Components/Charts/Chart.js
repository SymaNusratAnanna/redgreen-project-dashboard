import React from 'react';

import { Line } from '@ant-design/plots';
import 'moment/locale/zh-cn';
const Chart = () =>{
    
       

  const DemoLine = () => {
          const data = [
              {
                  type: 'others',
                  value: 350,
                },
            {
              type: 'Tv',
              value: 600,
            },
            {
              type: 'Laptop',
              value: 1000,
            },
           
            
          ];
    const config = {
      data,
      xField: 'type',
      yField: 'value',
      label: {},
      
      point: {
        size: 5,
       
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: {
        showMarkers: false,
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [
        {
          type: 'marker-active',
        },
      ],
    };
    return <Line {...config} />;
  };
  return (
      <div>
          
         <DemoLine />
      </div>
  )
  };
export default Chart;