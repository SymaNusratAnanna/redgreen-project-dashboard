import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import { MoreOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';


const DataTable = () =>{
    const [AllSalesData, setSalesData] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setSalesData(data))
    },[])

    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <div>
                    <h1 
                        style={{
                            fontSize:"22px", 
                            fontWeight: "bold",
                        }}>
                            Most Popular Product
                    </h1>
                </div>
                <div>
                    <MoreOutlined style={{ fontSize: '22px'}} />
                </div>
            </div>
            <div>
            {
                AllSalesData.map(salesData=>
                    <div>
                        <div className='names'>
                        <div>
                             <h1 
                                 style={{
                                        width: "45px",
                                        marginRight: "8px",
                                        padding: "8px 10px",
                                        fontStyle:' normal',
                                        textAlign: "center",
                                        borderRadius: "8px",
                                        border: "1px solid #d5cfcf",
                                        fontFamily: 'Poppins',
                                        fontSize: '20px',
                                        fontWeight: 500,
                                        lineHeight: '20px'
                                    }}
                                    >{salesData.name}</h1>
                                </div>
                            <div style={{marginRight: 380}}>
                                <h1>{salesData.title}</h1>
                                {
                                    salesData.profit < 0
                                    ?
                                    <h5 style={{color: "red"}}>{salesData.profit}% Increase</h5>
                                    :
                                    <h5 style={{color: "#747474"}}>{salesData.profit}% Increase</h5>
                                }
                            </div>
                        <div>
                            <span
                                style={{
                                    color: "red"
                                }}
                            >
                                {salesData.sales}
                            </span>
                        </div>
                       
                        </div>
                        
                        <Divider style={{marginTop:0}}/>
                        
                    </div>
                )
            }<p style={{color:"#2D5BFF",fontWeight: 500,
            fontSize: '14px'}}>Show more</p>
           
            </div>
        </div>
    );
};
export default DataTable;