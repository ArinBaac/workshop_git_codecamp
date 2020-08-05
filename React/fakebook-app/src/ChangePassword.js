import React, { createElement, useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import { Input } from 'antd';
import { blue } from '@ant-design/colors';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
//import { MyAvatar } from './App';
const { Header, Footer, Sider, Content } = Layout;


function ChangePassword() {
    return (
        <Layout>
            {/* <Header>Header</Header> */}
            
            <Content >
                <Row style={{ height: 600 }} justify="center">
                    <Col>
                        <Row  justify="center" style={{paddingTop:40}}>
                        <img className="MyAvatar" style={{ width: 150, height: 150 }}
              src="facebook.png" />
                        </Row>
                        <Row>
                            <span>Old password :</span>
                        </Row>
                        <Row>
                             <Input size="large" style={{ width: 400 }} type="password" placeholder="old password"></Input>
                        </Row>
                        <Row>
                            <span>New password : </span>
                        </Row>
                        <Row>
                             <Input size="large" style={{ width: 400 }} type="password" placeholder="new password"></Input>
                        </Row>
                        <Row>
                            <span>Confirm password :</span>
                        </Row>
                        <Row>
                             <Input size="large" style={{ width: 400 }} type="password" placeholder="Confirm password"></Input>
                        </Row>
                        
                        <Row style={{paddingTop:10}} justify="center">
                            <Button type="primary" >Change password</Button>
                        </Row>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>@Copyright Top and friends</Footer>
        </Layout>
  
    );

    
    
  
 
  }

  
  
  
  export default ChangePassword;
  