import React from "react";
import Parent from "./Parent"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import { Button } from 'antd';
import { blue,red } from '@ant-design/colors';

import {Row,Col } from 'antd';
import { Form, Input,Checkbox } from 'antd';




export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="/test"><Parent /></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  console.log(blue);
  return <h2><DatePicker/><Button type="primary">Button</Button><ul>{blue.map(color => <li style={{backgroundColor : color , height : 20 }}></li>)}</ul>
  
  <Row>
      <Col span={2} style={{backgroundColor : red[1]}}>col-2</Col>
      <Col span={4} style={{backgroundColor : red[2]}}>col-4</Col>
      <Col span={6} style={{backgroundColor : red[3]}}>col-6</Col>
      <Col span={8} style={{backgroundColor : red[4]}}>col-8</Col>
  </Row>

  <Row gutter={[16,32]} justify="end">
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
    </Row>

    <Row gutter={[16,32]} justify="space-between">
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={{backgroundColor : blue[1]}}>col-6</div>
      </Col>
    </Row>

    <Row>
      <Col flex={2} style={{backgroundColor : blue[1]}}>2 / 5</Col>
      <Col flex={3} style={{backgroundColor : blue[2]}}>3 / 5</Col>
     
     /</Row>
  
  </h2>;

}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

