import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import { 
  DatePicker, 
  Button, 
  Input,
  Row,
  Col,
  Layout,
  Menu
} from 'antd';
import 'antd/dist/antd.css';
import { 
  blue,
  red 
} from '@ant-design/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cAvatarPostTb: props.cAvatarPostTb,
      cPostTb: props.cPostTb,
      cAvatarTb: props.cAvatarTb,
      cNameTb: props.cNameTb,
      cTextTb: props.cTextTb
    }
  }

  addComment = () => {
    this.props.addCommentItem(this.state.cAvatarPostTb, this.state.cPostTb, this.state.cAvatarTb, this.state.cNameTb, this.state.cTextTb);
  }

  render() {
    return (
    <div>
      <Row>
        <Col span={24}>Commemt:</Col>
      </Row>
      <Row>
        <Col span={16}>
          <Input value={this.state.cNameTb} onChange={(e) => {
              this.setState({
                cNameTb: e.target.value
              })
            }} hidden></Input>
          <Input value={this.state.cTextTb} onChange={(e) => {
              this.setState({
                cTextTb: e.target.value
              })
            }}></Input>&nbsp;&nbsp;
        </Col>
        <Col span={8}>&nbsp;&nbsp;<Button type="primary" onClick={this.addComment}>Add</Button></Col>
      </Row>
    </div>
    )
  }
}

class CommentList extends React.Component {
  constructor(props) {
    super(props); // commentItems
  }

  render() {
    return (
      <div>
        {this.props.commentItems.map((commentItem) =>
          <div>
            <div>
              <span><img src={commentItem.cAvatarPost} width="40px" height="40" style= {{ borderRadius: 50 }} /></span>&nbsp;&nbsp;
              <span style={{ color: blue[5] }}>{commentItem.cPost}</span>
            </div><br />
            <div style={{ marginRight: 0, marginLeft: 0 }}><img src={commentItem.cAvatar} width="250px" /></div>
            <div style={{ color: "blue" }}>&nbsp;&nbsp;{commentItem.cName}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;{commentItem.cText}</div>       
          </div>)}
      </div>
    )
  }
}

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentItems: [
        {
          cAvatarPost: "./post_2.jpg",
          cPost: "Natcha",
          cAvatar: "./post_1.jpg",
          cName: "",
          cText: ""
        }
      ],
      cAvatarPostTb: "",
      cPostTb: "",
      cAvatarTb: "",
      cNameTb: "Comment:",
      cTextTb: "",
    }
  }

  addCommentItem = (cAvatarPost, cPost, cAvatar, cName, cText) => {
    this.state.commentItems.push({
      cAvatarPost: cAvatarPost,
      cPost: cPost,
      cAvatar: cAvatar,
      cName: cName,
      cText: cText
    })
    this.setState({
      commentItems: this.state.commentItems
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24} style={{ backgroundColor:blue[8], height: "5px",  }}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}><CommentList commentItems={this.state.commentItems}></CommentList></Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}><CommentInput cAvatarPostTb={this.state.cAvatarPostTb} cPostTb={this.state.cPostTb} cAvatarTb={this.state.cAvatarTb} cNameTb={this.state.cNameTb} cTextTb={this.state.cTextTb} addCommentItem={this.addCommentItem}></CommentInput></Col>
          <Col span={4}></Col>
        </Row>
      </div>
    )
  }
}

class MenuHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./fakebook_logo.png"
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item key="2">Help</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    )
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./fakebook_logo.png",
      txtUsername: "",
      txtPassword: ""
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24} style={{ height: "120px" }}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={5}><img src={this.state.logo} width="200px" /></Col>
          <Col span={13}>
            <Row>
              <Col span={12}><h5>Username:</h5></Col>
            </Row>
            <Row>
              <Col span={12}>
                <Input value={this.state.txtUsername} onChange={(e) => {
                  this.setState({
                    txtUsername: e.target.value
                  })
                }}></Input>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ height: "10px" }}></Col>
            </Row>
            <Row>
              <Col span={12}><h5>Password:</h5></Col>
            </Row>
            <Row>
              <Col span={12}>
                <Input value={this.state.txtPassword} onChange={(e) => {
                  this.setState({
                    txtPassword: e.target.value
                  })
                }}></Input>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ height: "25px" }}></Col>
            </Row>
            <Row style={{ height: "50px", textAlign: "center" }}>
              <Col span={5} style={{ textAlign: "center" }}>
                <Link to="/signup"><h5>Signup</h5></Link>
              </Col>
              <Col span={5} style={{ textAlign: "center" }}><Button type="primary"><Link to="/comment">Login</Link></Button></Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logo: "./fakebook_logo.png",
      txtUsername: "",
      txtPassword: "",
      txtCornfirmPassword: "",
      txtName: ""
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24} style={{ height: "20px" }}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={{ textAlign: "center" }}><img src={this.state.logo} width="100px" /></Col>
        </Row>
        <Row>
          <Col span={24} style={{ height: "20px" }}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={{ textAlign: "left" }}><h5>Username:</h5></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <Input value={this.state.txtUsername} onChange={(e) => {
              this.setState({
                txtUsername: e.target.value
              })
            }}></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ height: "20px" }}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={{ textAlign: "left" }}><h5>Password:</h5></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <Input value={this.state.txtPassword} onChange={(e) => {
              this.setState({
                txtPassword: e.target.value
              })
            }}></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ height: "20px" }}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={{ textAlign: "left" }}><h5>Cornfirm Password:</h5></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <Input value={this.state.txtCornfirmPassword} onChange={(e) => {
              this.setState({
                txtCornfirmPassword: e.target.value
              })
            }}></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ height: "20px" }}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={{ textAlign: "left" }}><h5>Name:</h5></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <Input value={this.state.txtName} onChange={(e) => {
              this.setState({
                txtName: e.target.value
              })
            }}></Input>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ height: "20px" }}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12} style={{ textAlign: "center" }}><Button type="primary"><Link to="/login">Signup</Link></Button></Col>
        </Row>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Router>
        <MenuHeader />
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/comment"><Comment /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;