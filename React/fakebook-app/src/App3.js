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

class FoodTable extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return <div>
      {this.props.foodItems.map((foodItems) => 
      <div>
        <table align="center" style={{marginTop: 20 }}>
          <tr>
            <td><span style={{marginRight: 20 }}>{foodItems.foodName}</span></td>
            <td><span> {foodItems.foodCost}</span></td>
            <td>
              <span> {foodItems.origin}</span>
            </td>
            <td> <button onClick={() => {
            if (foodItems.isEditing) {

            } else {
              this.props.startEditFoodItem(foodItems.foodName);
            }
          }}>{foodItems.isEditing ? "Process" : "Edit"} </button></td>
            <td><button onClick={ () => {this.props.deleteFoodItem(foodItems.foodName) }}>Delete</button></td>
          </tr>
        </table>
      </div>)}
    </div>
  }
}

class FoodInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodNameTb : "",
      foodCostTb : "",
      originTb : "",
      isUpdate : false    
    };
  }

componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if(prevProps.foodNameTb != this.props.foodNameTb){
      this.setState({
        foodNameTb: this.props.foodNameTb,
      foodCostTb: this.props.foodCostTb,
      originTb : this.props.originTb,
      isUpdate : true
      });
    }
  }
  addFood = ()=>{
    this.props.addFoodItem(this.state.foodNameTb, this.state.foodCostTb, this.state.originTb)
  }

  render(){
    return <div>
      <div>Food name</div>
      <div>
        <input type="text" value={this.state.foodNameTb} onChange={(e) => {
          this.setState({
            foodNameTb : e.target.value
          })
        }}></input>
      </div>
      <div>Food cost</div>
      <div>
      <input type="text" value={this.state.foodCostTb} onChange={(e) => {
          this.setState({
            foodCostTb : e.target.value
          })
        }}></input>
      </div>
      <div>Origin</div>
      <div>
      <input type="text" value={this.state.originTb} onChange={(e) => {
          this.setState({
            originTb : e.target.value
          })
        }}></input>
      
      <select onChange={(e) => {
          this.setState({
            originTb : e.target.value
          })
        }}>
        <option value="BKK" > Bangkok</option>
        <option value="CM"> Chiangmai</option>
        <option value="NSW"> Nakhonsawan</option>
      </select>
      </div>
      <div>
      <button onClick={this.state.isUpdate ? this.updateFood : this.addFood} > {this.state.isUpdate ? "Update" : "Add"}</button>
      </div>
    </div>
  }
}
class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems : [
        {
          foodName : "Rice",
          foodCost : "50",
          origin : "BKK"
        },
        {
          foodName : "Noodle",
          foodCost : "20",
          origin : "CM"
        }
      ]
    };
  }

  addFoodItem = (foodName, foodCost,origin) => {
    this.state.foodItems.push({
      foodName : foodName,
      foodCost :foodCost,
      origin : origin
    });
    this.setState({
      foodItems : this.state.foodItems
    });
  }

  deleteFoodItem = (foodName) => {

    var newFoodItem = this.state.foodItems.filter(i => i.foodName !== foodName);
    this.setState({
      foodItems : newFoodItem
    });
  }

  startEditFoodItem = (foodName) => {
    var updatedFoodItem = null;
    var newFoodItems = this.state.foodItems.map((foodItem) => {
      if (foodItem.foodName === foodName) {
        foodItem.isEditing = true;
        updatedFoodItem = foodItem;
        return foodItem;
      } else {
        return foodItem;
      }
    });
    this.setState({
      foodItems: newFoodItems,
      foodNameTb: updatedFoodItem.foodName,
      foodCostTb: updatedFoodItem.foodCost,
      originTb : updatedFoodItem.origin
    });
  }

  doUpdateFoodItem = (foodName, foodCost) => {
    var newFoodItems = this.state.foodItems.map((foodItem) => {
      if (foodItem.foodName === foodName) {
        foodItem.isEditing = false;
        foodItem.foodCost = foodCost;
        return foodItem;
      } else {
        return foodItem;
      }
    });
    this.setState({
      foodItems : newFoodItems
    });
  }

  render() {
    return (
      <div >
       <FoodTable startEditFoodItem={this.startEditFoodItem} deleteFoodItem={this.deleteFoodItem} foodItems={this.state.foodItems}></FoodTable>
        <FoodInput doUpdateFoodItem={this.doUpdateFoodItem} foodNameTb={this.state.foodNameTb} foodCostTb={this.state.foodCostTb} addFoodItem={this.addFoodItem}></FoodInput>
       </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Food/>
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
