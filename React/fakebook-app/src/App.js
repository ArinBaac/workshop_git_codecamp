import React, { createElement, useState } from 'react';
import logo from './logo.svg';
import './App.css';
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
import { Row, Col, Card, Space } from 'antd';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

function MyAvatar(props) {
  return (
    <img className="MyAvatar" style={{ width: 30, height: 30 }}
      src={props.avatarUrl}
      alt={props.name}
    />
  );
}


class CommentDiv extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mystyle = {
      color: "black",
      padding: "10px",
      width: 400
    };

    return <div style={{ marginTop: 50 }}>
      {this.props.commentItems.map((commentItems) =>
        <div>
          <table align="center" style={mystyle} >
            <tr>
              <td>
                <Space direction="vertical">
                  <Card style={{ width: 450, textAlign: "left" }}>
                    <Comment
                      // actions={actions}
                      author={commentItems.userName}
                      avatar={
                        <Avatar
                          src={commentItems.avatarUrl}
                          alt={commentItems.avatarUrl}
                        />
                      }
                      content={
                        <p>
                          {commentItems.commentText}
                        </p>
                      }
                      datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                          <span>{moment().fromNow()}</span>
                        </Tooltip>
                      }
                    />
                  </Card>
                </Space>
              </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  }
}

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentTextTb: ""
    };
  }

  addComment = () => {
    this.props.addCommentItem(this.state.userName, this.state.commentTextTb, this.state.avatarUrl)
  }

  render() {
    const mystyle = {
      border: "1px solid lightgray"
    };
    return <div style={{ marginTop: 100 }}>
      <table align="center" width="40%" style={mystyle}  >
        <tr>
          <td>

            <Space direction="vertical">
              <Card title="Create Post" style={{ width: 450, textAlign: "left" }}>
                <p><Avatar src="./logo192.png" style={{ marginRight: 15 }} />
                  <Input size="large" style={{ width: 300 }} placeholder="Write your post"></Input> </p>
              </Card>

              <Card style={{ width: 450, textAlign: "left" }}>
                <Row>
                  <Col span={4}><Avatar src="./profileimg.jpg" style={{ width: 50, height: 50, marginRight: 15 }} />
                  </Col>
                  <Col span={20}>
                    <Row>
                      John Legend
                    </Row>
                    <Row>
                      <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span style={{ fontSize: 10 }}>{moment().fromNow()}</span>
                      </Tooltip>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <p>This is my first post. Hello guys!</p>
                  <img className="MyAvatar" style={{ width: 400, height: 400 }}
                    src="profileimg.jpg" /> </Row>
              </Card>
              <Card title="Add your comment" style={{ width: 450, textAlign: "center" }}>
                <Input size="large" style={{ width: 400 }} placeholder="Write your comment!" value={this.state.commentTextTb} onChange={(e) => {
                  this.setState({
                    commentTextTb: e.target.value
                  })
                }}></Input>
              </Card>
            </Space>
          </td>
        </tr>
        <tr>
          <Button type="primary" onClick={this.addComment}>Add comment</Button>
        </tr>
      </table>

    </div>
  }
}
class CommentFB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentItems: [
        {
          userName: "Ray 123",
          commentText: "this is my comment",
          avatarUrl: "./logo192.png"
        },
        {
          userName: "Test 321",
          commentText: "this is my comment",
          avatarUrl: "./logo192.png"
        }
      ]
    };
  }

  addCommentItem = (userName, commentText, avatarUrl) => {
    this.state.commentItems.push({
      userName: "Test",
      commentText: commentText,
      avatarUrl: "./logo192.png"
    });
    this.setState({
      commentItems: this.state.commentItems
    });
  }

  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <Layout> <
        div>

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Row>
              <Col span={6}><img style={{ width: 30, height: 30 }}
                src="facebook.png" />  Fakebook</Col>
              <Col span={6}> </Col>
              <Col span={6}> </Col>
              <Col span={6} align="end">User name  <MyAvatar avatarUrl="./logo192.png" /> </Col>
            </Row>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <CommentInput commentTextTb={this.state.commentTextTb} addCommentItem={this.addCommentItem} ></CommentInput>
          <CommentDiv commentItems={this.state.commentItems}></CommentDiv>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@Copyright Top and friends</Footer>
      </div> </Layout>
    )
  }
}

function App() {
  return (
    <div className="App">
      <CommentFB />
    </div>

  );

  // return (
  //   <Router>
  //     <nav>
  //       <ul>
  //         <li><Link to ="/">home</Link></li>
  //         <li><Link to ="/about">About</Link></li>
  //         <li><Link to ="/user">Users</Link></li>
  //       </ul>
  //     </nav>
  //     <div>
  //       <Switch>
  //         <Router path="/about">About</Router>
  //         <Router path="/user">User</Router>
  //         <Router path="/">Home</Router>
  //       </Switch>
  //     </div>
  //   </Router>
  // )
}


export default App;
