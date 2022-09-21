import React from 'react';
import { Divider } from 'antd';
import { useEffect, useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';

const SalesDetails = () => {
    const [sells, setSells] = useState([]);

    useEffect(()=>{
        fetch('sells.json')
        .then(res=>res.json())
        .then(data=>setSells(data))
    },[])

    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    marginBottom: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <div>
                    <h1 
                        style={{
                            fontSize:"22px", 
                            fontWeight: "bold",
                        }}>
                            Sales
                    </h1>
                   
                </div>
                <div>
                    <MoreOutlined style={{ fontSize: '22px'}} />
                </div>
            </div>
            <div style={{display:"flex"}}>
                        <div style={{color: "#5C5C5C",fontSize:"16px"}}>
                            Monthly Sales
                        </div>
                        <div>

                        </div>
                    </div>
                    <p style={{fontSize: "28px"}}>918</p>
            <div>
            {
                sells.map(sell=>
                    <div>
                        <div className='product-main'>
                        <div className='product-sub'>
                            <div>
                                <div 
                                    style={{
                                        width: "45px",
                                        marginRight: "8px",
                                        textAlign: "center",
                                        fontFamily: 'Poppins'
                                    }}>
                                    <img src={sell.pic} alt="" />
                                </div>
                            </div>
                            <div>
                                <h1>{sell.product}</h1>
                                {
                                  
                                    <h5 style={{color: "#747474"}}>{sell.seller}</h5>
                                }
                            </div>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: "#2D5BFF"
                                }}
                            >
                                {sell.detail}
                            </span>
                        </div>
                       
                        </div>
                        
                        <Divider />
                        
                    </div>
                )
            }<p style={{color:"#2D5BFF",fontWeight: 500,
            fontSize: '14px'}}>Show more</p>
           
            </div>
        </div>
    );
};

export default SalesDetails;