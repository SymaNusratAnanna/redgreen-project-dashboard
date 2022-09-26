import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Layout, Menu, Input, Avatar, Badge, Select, Alert, Col, Card, Row } from 'antd';
import { SearchOutlined,  AlignRightOutlined } from '@ant-design/icons';
import { BsFillBellFill } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { BsMenuButton } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import "../index.css";
import rain from "../images/heavy-rain.png";
import Chart from './Charts/Chart';

import Weather from './Weather';
import DataTable from './DataTable';
import Piechart from './Charts/Piechart';
import SalesDetails from './SalesDetails';

const { Header, Content, Sider } = Layout;
const { Option } = Select;

function getItem( icon, label, key, children, type) {
    return {
        key,
        icon,
        label,
        children,
        type
    };
}

const items = [
   
    getItem('icon1','Menu', 'g1', [getItem( <AlignRightOutlined style={{transform: "rotate(90deg)"}} />,'Dashboard','1'),
    getItem(  <GrMapLocation/>,'Maps','2'),
    getItem( <BsMenuButton/> ,'Menu','3')
  ] ,'group'),
   getItem('icon2','Others', 'g2',[
    getItem(  <AiTwotoneSetting/>,'Settings','4'),
    getItem(  <HiUser/>,'Accounts','5'),
    getItem(  <BsFillInfoSquareFill/>,'Help','6'),
   ], 'group'),
  ]

const suffix = (
    <SearchOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
const Dashboard = () =>  {
    const [show, setShow] = useState(true);
    return (
        <Layout >
            <Header style={{
                backgroundColor: '#FFFFFF',
                height: '50px',
                overflow: 'hidden',
                position: 'fixed',
                zIndex: 1,
                display: 'flex',
                justifyItems: 'flex-end',
                width: '100%',
                boxShadow: "0px 0.3px 0.9px rgba(0, 0, 0, 0.07), 0px 1.6px 3.6px rgba(0, 0, 0, 0.11)"
            }}>
                <p style={{ fontWeight: 'bold' }}><span style={{ backgroundColor: 'blue', paddingLeft: 7, paddingRight: 7, borderRadius: '80%', color: 'white', marginRight: '10px' }}>L</span>LOGO</p>
                <Input

                    placeholder="Search"
                    style={{
                        width: 365,
                        height: 35,
                        marginTop: 8,
                        marginLeft: 100
                    }}
                    allowClear
                    suffix={suffix}
                />
                <div style={{ marginLeft: '560px' }}>
                    <Badge dot={show} style={{ marginTop: '23px', marginRight: 24 }}>
                        <BsFillBellFill shape="square" size={20} style={{ marginTop: '20px', marginRight: 20, color: 'gray' }} />
                    </Badge>
                    <Avatar style={{ marginBottom: 20 }} src="https://joeschmoe.io/api/v1/random" />
                    <Select
                        defaultValue="Admin"
                        bordered={false}
                    >
                        <Option value="Admin">Admin</Option>
                        <Option value="User">User</Option>
                    </Select>

                </div>
            </Header>

            <Layout>
                <Sider width={200} style={{ backgroundColor: "#E1E1E1", marginTop: "100px" }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}

                        style={{
                            height: '100%',
                            backgroundColor: "#E1E1E1",
                            borderRight: 0,
                            position: 'fixed',
                            overflowX: 'hidden',
                            width: "200px",
                            top: "50px",
                            left: "0px"
                        }}
                    />
                </Sider>
                <Layout >
                    <Content style={{ marginTop: "50px", backgroundColor: '#FFFFFF',}}>
                        <div style={{ margin: 30 }}>
                            <p style={{ fontSize: 20, fontWeight: 'bold' }}>Redgreen Sales</p>
                            <img src={rain} style={{position: 'absolute',   width:"80px",zIndex: 3, marginLeft: 20, marginTop:5}} alt="" />
                                
                            <Alert
                                message="Notification"
                                description="You dont have enough stock for the next campaign."
                                image="https://joeschmoe.io/api/v1/random"
                                type="warning"
                                closable
                                style={{
                                    height: 90,
                                    color: '#9D8506',
                                    fonWeight: 400,
                                    fontSize: 16,
                                    paddingLeft:100,
                                    position: 'relative',
                                    borderLeftColor: '#9D8506',
                                    borderLeftWidth: 4
                                    
                                }}
                            />
                        </div>
                        <div>
                        <Row>
      <Col flex={3}  >
      <Card  style={{width:'900px',marginLeft:10,height:"80vh"}}>
      <p style={{fontSize:24,fontWeight:"bold"}}>Total sales</p>
        <div style={{display:"flex"}}>
        <div style={{marginTop:40}}>
        <p style={{color:'gray'}}>Tv</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>600.00</p>
        <p style={{color:'gray'}}>Laptop</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>12000.00</p>
        <p style={{color:'gray'}}>Others</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>200.287</p></div>
          <div style={{width:"70%",marginLeft:'160px'}}>
          <Chart></Chart>
          </div>
        </div>
  </Card>
      
      </Col>
      <Col style={{width:'350px'}} flex={2}>
      <Card style={{height:"80vh",marginRight:"10px",boxShadow:"10px"}}>
      <p style={{fontSize:24,fontWeight:"bold"}}>Sales chart</p>
      <div  style={{
            display:"flex",
            justifyContent:"space-between"
          }}>
          <div>
            <p style={{color:'gray'}}>Todays Sale</p>
          </div>
              <div>
              <Select 
      defaultValue="Today"
      style={{
      width: 100,
      }}
      
    >
      <Option value="Last week">Last week</Option>
      <Option value="Last Month">Last Month</Option>
    </Select>
              </div>
        </div>
        <p style={{fontSize:28,fontWeight:"semiBold"}}>156</p>
      <Piechart/>
  </Card>
      </Col>
  
    </Row>
    
    <Row>
     
     <Col span={12}>
     <Card style={{margin:10}}>
      <DataTable></DataTable>
      </Card>
      </Col>
     
     <Col span={12}>
     <Card style={{margin:10}}>
      <SalesDetails></SalesDetails>
      </Card>
      <Card style={{margin:10}}>
      <Weather></Weather>
      </Card>
      </Col>  
    </Row>
    </div>

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Dashboard;