
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {
  Menu,
  Dropdown,
  Button,
  message,
  Tooltip
} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    function handleButtonClick(e) {
      message.info('Click on left button.');
      console.log('click left button', e);
    }

    function handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
    }

    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          1st menu item
          </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          2nd menu item
          </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          3rd item
          </Menu.Item>
      </Menu>
    );
    return <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
    </nav>
  }
}