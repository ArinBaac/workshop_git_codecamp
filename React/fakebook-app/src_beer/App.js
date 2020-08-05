import React from "react";
import Parent from "./Parent"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Row, Col, DatePicker, Form, Input, Button, Checkbox  } from 'antd';
import { blue } from '@ant-design/colors';
import 'antd/dist/antd.css';
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="/test"><Parent /></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/signup"><Signup/></Route>
        </Switch>
      </div>
    </Router>
  );
}

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Login() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row justify="center" align="middle" style={{height: "80vh"}} gutter={18}>
      <Col>
      <i class="fab fa-facebook-square" style={{color:"#4267B2", fontSize:"200px"}}></i>
        </Col>
      <Col>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="link" htmlType="button" >
          <Link to="/signup">Signup</Link>
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        {/* <Row>
          <Col span={24}><h3>username</h3></Col>
          <Col span={24}><input type="text" style={{width:"100%"}}/></Col>

        </Row>
        <Row>

          <Col span={24}><h3>password</h3></Col>
          <Col span={24}><input type="text" style={{width:"100%"}}/></Col>

        </Row>
        <Row justify="center" style={{paddingTop:"10px"}}>
          <Col span={8}><button>sign up</button></Col>
          <Col span={8}><button>log in</button></Col>
        </Row> */}
      </Col>
    </Row>
  )
}


function Signup() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row justify="center" align="middle" style={{height: "80vh"}} gutter={18}>
      <Col>
      <i class="fab fa-facebook-square" style={{color:"#4267B2", fontSize:"200px"}}></i>
        </Col>
      <Col>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="link" htmlType="button" >
          <Link to="/signup">Signup</Link>
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        {/* <Row>
          <Col span={24}><h3>username</h3></Col>
          <Col span={24}><input type="text" style={{width:"100%"}}/></Col>

        </Row>
        <Row>

          <Col span={24}><h3>password</h3></Col>
          <Col span={24}><input type="text" style={{width:"100%"}}/></Col>

        </Row>
        <Row justify="center" style={{paddingTop:"10px"}}>
          <Col span={8}><button>sign up</button></Col>
          <Col span={8}><button>log in</button></Col>
        </Row> */}
      </Col>
    </Row>
  )
}

function Home() {
  console.log(blue[3]);
  var style = {
    backgroundColor: blue[8]
  };
  return <div>

    <Row gutter={16}>
      <Col flex={1}> <div style={style}>2 / 5</div></Col>
      <Col flex={100}> <div style={style}>3 / 5</div></Col>

    </Row>


  </div>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}