import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function Hello123(props) { return <div> {props.children} {props.firstName} </div> }

const Component2 = {
  one: function One() {
    return <div>One111</div>;
  },
  two: function Two(props) {
    return <div> this is children {props.number} TWO222</div>;
  },
  three: () => React.createElement('Three', null, "component 3"),

}

function Oak(props) {
  return <div>Imagine a {props.color} datepicker here.</div>;
}

function MyComponent(props) {
  return <p>MyComponent {props.message}</p>
}

function StringComponent(props) {

  return <p>String Component {props.message} number : {props.number}
   boolean : {String(props.boo)}
  Array : {props.arr && props.arr.map((item) => <li> item : {item} </li>)}
   Object : {props.obj.o} {props.obj.w} </p>
}

function Employee(props) {
  return <p>First name : {props.fName} Last name : {props.lName} Age : {props.age}</p>
}

function Leader(props) {
  var fName = props.xxx;
  var lName = props.aaa;
  var age = props.bbb;
  return <Employee fName={fName} lName={lName} age={age}> </Employee>
}

function Head(props) {
  var p = { ...props }
  return <Employee fName={p.xxx} lName={p.aaa} age={p.bbb}></Employee>
}

function Person(props) {
  return <div>
    <table >
      <tr >
        <td rowspan="2"><img src={props.imgUrl} width="100" height="100" /></td>
        <td>NAME : {props.displayName}</td>
      </tr>
      <tr>

        <td>{props.workPlace}</td>
      </tr>
    </table>
  </div>
}

function JSX(props) {
  return <ul>
    <li>{props.one}</li>
    <li>{props.two}</li>
    <li>{props.three}</li>
    {props.arr && props.arr.map((item) => <li> item : {item} </li>)}
  </ul>
}
function Menu(props) {
  return <div style={{paddingTop:20, fontSize:30}} ><Home showHome={props.showHome}></Home>
    <Contact showContact={props.showContact}></Contact>
    <About showAbout={props.showAbout}></About></div>
}
function Home(props) {
  return props.showHome ? <span> Home </span> : ""
}
class Contact extends React.Component {
  render() {
    return this.props.showContact && <span> Contact </span>
  }
}
function About(props) {
  return props.showAbout ? <span> About   </span> : ""
}

class Welcome extends React.Component {
  render() {
    return <h1 style={{color:"pink"}}>Hello, {this.props.name}</h1>;
  }
}
function Comment(props) {
  return (
    <div className="Comment" style={{padding:10, lineHeight:2}}>
      <div className="UserInfo">
        <Avatar avatarUrl={props.avatarUrl} name={props.name} />
        <UserInfo username={props.username}/>
      </div>
      <CommentText text={props.text}/>
      <CommentDate date={props.date}/>
    </div>
  );
}

function Comment2(props){
  return(
    <div><Avatar  avatarUrl={props.avatarUrl} name={props.name}/>
    {props.animal}
    </div>
  )
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.avatarUrl}
      alt={props.name}
    />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo-name">
      {props.username}
    </div>
  );
}
class CommentText extends React.Component {
  render() {
    return <div className="Comment-text">
      {this.props.text}
    </div>;
  }
}
class CommentDate extends React.Component {
  render() {
    return <div className="Comment-date">
      {(this.props.date)}
    </div>;
  }
}

const picture = "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2725&q=80"
const profile = [{ name: "A", pic: picture }, { name: "B", pic: picture }, { name: "C", pic: picture }]

const imgMovies = "https://upload.wikimedia.org/wikipedia/en/8/89/Extraction_%282020_film%29.png"
const imgMovies2 = "http://www.centurythemovieplaza.com/files/movie/imgm_231219_1104281085186381.jpg"
const imgMovies3 = "http://www.apexsiam-square.com/img/movie/Vanguard-2020.jpg"
const detail = [{ name: "Extraction", pic: imgMovies, date: "12 June 2020" }, { name: "Free guy", pic: imgMovies2, date: "12 June 2020" }, { name: "Vanguard", pic: imgMovies3, date: "12 June 2020" }]

const TestFunction = (props) => {
  return <div>test</div>
}

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0,
      name : "RAY",
      dogs : ["a","b","c"],
      firstName : ["Sunny", "Windy", "Rocky"],
      people : [
        {fName : "test" , lName : "test"},
        {fName : "test2" , lName : "test2"}
      ],
      tbFirstName : "",
      tbLastName : "",
      inputNumber : "",
      operand : "",
      param1 : "" 
    };
  }

  increment = () => {
    // this.state.counter = this.state.counter + 1  
    this.setState({
  counter : this.state.counter + 1
    });
  }
  
  decrease = () => {
    // this.state.counter = this.state.counter -1
    this.setState({
      counter : this.state.counter - 1
    });
  }

  nameChange = () => {
    // this.state.name = 'Ray 123456789' 
    this.setState({
      name : 'Ray 123456789'
    });
  }
  
  dogsToHuman = () => {
    // this.state.dogs = this.state.firstName
    this.setState({
      dogs :  this.state.firstName
    });
  }

  addDog = () => {
    this.state.dogs.push("DDD");
    this.setState({
      dogs : this.state.dogs
    });
  }

  handleFirstName = (e) => {
      this.setState({
      tbFirstName : e.target.value
    });
  }
  
  handleLastName = (e) => {
    this.setState({
    tbLastName : e.target.value
  });
  }

  addPeople = () => {
    this.state.people.push({ fName : this.state.tbFirstName , lName: this.state.tbLastName});
    this.setState({
      people : this.state.people,
      tbLastName : "",
      tbFirstName: ""
    });
  }
 
  handleInputNumber = (e) => {
    if (this.state.inputNumber == "") {
      this.setState({
        inputNumber: e.target.value
      })
    }
    else if(this.state.inputNumber != "" && this.state.operand != ""){
      this.setState({
        param1: this.state.inputNumber,
        inputNumber : e.target.value
      })
    }
    else{
      this.setState({
        inputNumber: this.state.inputNumber + e.target.value
      })
    }
  }

  handleOperand = (e) => {
    if (this.state.operand == "") {
      this.setState({
        operand: e.target.value
      });
    }
    else{
      this.setState({
        param1: this.state.inputNumber,
        inputNumber : ""
      });
    }
  }

  handleCalculate = (e) => {

    switch (this.state.operand) {
      case "+":
        this.setState({
           inputNumber : parseInt(this.state.param1) + parseInt(this.state.inputNumber),
           param1 : "",
           operand : ""
        })
       
    }
  
  }
  show = () => {
    // this.state.counter = this.state.counter -1
    this.setState({
      inputNumber : this.state.inputNumber
    });
  }
  render() {
    return (
      <div>
        This is a test for React State {this.state.counter}
        <button onClick={this.increment}> Increment </button>
        <button onClick={this.decrease}> Decrease </button>
        <div>

          <table align="center">
            <tr>
              <td colSpan="4"><input type="text" value={this.state.inputNumber} onChange={this.show}></input>{this.state.inputNumber}</td>
            </tr>
          <tr>
              <td></td><td></td><td><button>C</button></td>
            </tr>
            <tr>
              <td><button onClick={this.handleInputNumber} value="1" >1</button></td>
              <td><button onClick={this.handleInputNumber} value="2" >2</button></td>
              <td><button onClick={this.handleInputNumber} value="3" >3</button></td>
              <td><button onClick={this.handleOperand} value = "+">+</button></td>
            </tr>
            <tr>
              <td><button onClick={this.handleInputNumber} value="4" >4</button></td>
              <td><button onClick={this.handleInputNumber} value="5" >5</button></td>
              <td><button onClick={this.handleInputNumber} value="6" >6</button></td>
              <td><button onClick={this.handleOperand} value = "-" >-</button></td>
            </tr>
            <tr>
              <td><button onClick={this.handleInputNumber} value="7" >7</button></td>
              <td><button onClick={this.handleInputNumber} value="8" >8</button></td>
              <td><button onClick={this.handleInputNumber} value="9" >9</button></td>
              <td><button onClick={this.handleOperand} value = "*">*</button></td>
            </tr>
            <tr>
              <td></td><button onClick={this.handleInputNumber} value="0">0</button>
              <td><button onClick={this.handleCalculate}>=</button></td>
              <td><button onClick={this.handleOperand} value = "/">/</button></td>
            </tr>
          </table>
        </div>
        <div>
          {this.state.dogs.map((dogs)=>{
            return <div>{dogs}</div>
          })}
        </div>
        <div>
          {this.state.people.map((person)=>{
            return <div>{person.fName} {person.lName}</div>
          })}
        </div>
        <button onClick={this.addDog}> Add dog </button>
        <button  onClick={this.dogsToHuman}>Dogs to Human</button>
        
        My name is {this.state.name}
        <button onClick={this.nameChange}> Change </button>

        <div>
         First name :  <input type="text"  value ={this.state.tbFirstName} onChange={this.handleFirstName}></input>
         Last name :  <input type="text"  value ={this.state.tbLastName} onChange={this.handleLastName}></input>

        
        </div> 
        <button onClick={this.addPeople}> Add People </button>
      </div>

      
    )
  }
}

function App() {
  return (
    <div className="App">
      <TestClass />
      <Menu showHome={true} showContact={true} showAbout={true}></Menu>
      <Welcome name="ray"></Welcome>
      <Comment text="test text" date="2020-02-20" name="Ray" avatarUrl="logo192.png" username="Sirapat"></Comment>

    </div>

  );
}

/*      <MyComponents.DatePicker></MyComponents.DatePicker>
      <MyComponents.Test></MyComponents.Test>
      <Component2.one></Component2.one>
      <Component2.two number="123456789"></Component2.two>
      <Component2.three></Component2.three>
      <Oak></Oak>
      <MyComponent message="hello world" />
      <MyComponent message={'hello world'} />


      <MyComponent message="&lt;3" />
      <MyComponent message={'<3'} />

      <StringComponent message="test string" number={2500} arr={[1, 2, 3, 4, 5]}
        boo={false} obj={{ o: "this is an object", w: "hhhhhhhhhhhhhhhhhh" }}></StringComponent>

      <Employee fName="Tom" lName="Riddle" age="50"></Employee>
      <Leader aaa="Leader" bbb="Riddle" ccc="30"></Leader>
      <Head xxx="Head" aaa="HeadL" bbb="44" ></Head>

      <JSX one={1} two={2} three={3} arr={[1,2,3]} ></JSX>

      <Person displayName="Tom" workPlace="BAAC" imgUrl="./logo192.png"></Person>
      <Hello firstName="..."> Hello world</Hello>

      {React.createElement("Hello", { firstName: "..." }, "RAY")}

      {profile.map(obj => <div>
      <p>{obj.name}</p>
        <img src={obj.pic}/>
      </div> )}

      {detail.map(obj => <div>
        <table>
          <tr>
            <td>{obj.name}</td>
            <td><img src={obj.pic}/></td>
            <td>{obj.date}</td>
          </tr>
        </table>

      </div> )} */

export default App;
