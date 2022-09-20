import React from 'react';
import { Pie } from '@ant-design/plots';

const Piechart = () =>{
    
            

  const DemoPie = () => {
    const data = [
      {
        type: 'Tv',
        value: 600,
      },
      {
        type: 'Laptop',
        value: 1200,
      },
      {
        type: 'others',
        value: 350,
      }
      
      
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      interactions: [
        {
          type: 'element-selected',
        },
        {
          type: 'element-active',
        },
      ],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          
        },
      },
    };
    return <Pie {...config} />;
  };
  
  return (
      <div>
          <DemoPie />
          <p style={{textAlign:"right", marginTop:-160,marginRight:15,color:" #2D5BFF",fontWeight:"bold",cursor:"pointer"}}>See Details</p>
          </div>
      );
  };
  
  

    


export default Piechart;