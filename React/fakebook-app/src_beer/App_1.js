import React from 'react';
import logo from './logo.svg';
import './App.css';
//import ReactPic from 'https://img.emg-services.net/HtmlPages/HtmlPage4239/switzerland-header-2.jpg'


function Hello(props) { return <div> {props.children} {props.firstName} </div> }

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
  Test: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
  Krissada: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
}
const MyComponent = {
  one: function One() { return <h1> component one</h1> },
  two: function Two(props) { return <h2>component two and props is {props.number}</h2> },
  three: () => React.createElement('Three', null, "component three"),
  four : () => <h4>component 4</h4>
}


function Beer(props) {
  return <div>Imagine a {props.color} datepicker here.</div>;
}

function MyComponent3(props) {
  return <div>{props.bstr},{props.bnum},{String(props.bboo)},{props.barr},{props.bobj.name} </div>;
}


function MyProfile(props) {
  return <div>{props.displayname},
  {props.workplace}</div>;
}

 function Person(props) {
  return (
    <div style={{ float: 'left', width: '300px', border: '1px solid #CCC', padding: '10px' }}>
      <img src={props.imgUrl} style={{ float: 'left', width: '35px', 'margin-top': '5px', 'margin-right': '20px', 'border-radius': '20px' }}></img>
      <div style={{ color: 'rgb(25, 0, 255)' }} >{props.displayName}</div>
      <div style={{ color: 'rgb(211,211,211)' }} >{props.workPlace}</div>
    </div>)
} 

class CommentDate extends React.Component{
  render(){
    return <div className="Comment-date">
    {this.props.date}
  </div>
  }
}
function CommentText(props){
  return <div className="Comment-text">
  {props.text}
</div>;
}
function UserName(props){
  return <div className="UserInfo-name">
  {props.author.name}
</div>;
}
const Avatar = (props) => (<img className="Avatar"
src={props.author.avatarUrl}
alt={props.author.name}
/>)

function UserInfo(props){
  return <div className="UserInfo">
        <Avatar author={props.author}/>
        <UserName author={props.author}/>
      </div>
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author}/>
      <CommentText text={props.text}/>
      <CommentDate date={props.date}/>
    </div>
  );
}


//before
/* function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <CommentDate/>
    </div>
  );
} */

class Home2 extends React.Component{
  render(){
    return <div>Home2</div>
  }
}

function Home(props) {
  return props.showHome ? <span>Home</span> : null;
}

function Contact(props) {
  return <span>Contact</span>
}

function About(props) {
  return <span>About</span>
}

/* function Menu(props){
  console.log(props);
return <div><Home showHome={props.showHome}></Home>{props.showContact && <Contact></Contact>}{props.showAbout && <About></About>}</div>
} */

class Menu extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props);
    return <div><Home showHome={this.props.showHome}></Home>{this.props.showContact && <Contact></Contact>}{this.props.showAbout && <About></About>}</div>

  }
}

/* function App() {
  return (
    <div><Menu showHome={true} showAbout={false} showContact={true}></Menu></div>
  );
} */




function App() {
  return (
    <div>
      <p /*class="App-header"*/ id="content"  style={{fontSize: "24px", color: "blue",background: "yellow", textAlign:"center"}} >content </p>
      <Comment author={{ avatarUrl: "https://img.emg-services.net/HtmlPages/HtmlPage4239/switzerland-header-2.jpg", name: "Beer" }} text="Test" date="19/6/2563" />
    </div>
    );
}




function MyComponent2(props){

return<p>My component : {props.message}</p>
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        <MyComponent2 message="hello world" />
        <MyComponent2 message={'hello world'} />
        <MyComponent2 message="&lt;3" />
        <MyComponent2 message={'<3'} />

        <MyComponent3 bstr={'string value'} bnum={42} bboo={true} barr={[1, 2, 3, 4]} bobj={{ 'name': 'Morakot', 'lastname': 'Nakhum' }} />
        <MyProfile displayname={'MORAKOT NAKHUM'} workplace={"BAAC"} />
        
          
          <MyComponents.DatePicker></MyComponents.DatePicker>
          <MyComponents.Test></MyComponents.Test>

          <Oak></Oak>
          <Hello firstName="A"> Hello Worldss</Hello>

          {React.createElement("Hello", { firstName: "B" }, "Hello world")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent.one />
          <MyComponent.two number={2}/>
            <MyComponent.three />
            <MyComponent.four />
      </header>
    </div>
  );
} */


// function Menu(props){
//   return
//   <span>Home</span>             

// }

// function Contact(props){

//   <span>Contact</span>
// }

// function About(props){

// <span>About</span>
// }


export default App;




/* const picture = "https://img.emg-services.net/HtmlPages/HtmlPage4239/switzerland-header-2.jpg"
const profile = [
    {name: "A", pic: picture},
    {name: "B",pic:picture },
    {name: "C", pic:picture}
]

{profile.map(obj => <div>
    <p>{obj.name}</p>
      <img src={obj.pic}/>
    </div> )} 
 */

    

