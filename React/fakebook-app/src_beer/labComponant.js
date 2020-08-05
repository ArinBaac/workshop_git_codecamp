import React from 'react';
import logo from './logo.svg';
import './App.css';

function Employee(props) {
  return <div>
    <div>firstname : {props.firstName}</div>
    <div>lastName : {props.lastName}</div>
    <div>age : {props.age}</div>
  </div>;
}

function Leader(props){
  var firstName = props.xx;
  var lastName = props.aa; 
  var age = props.bb; 
  return <Employee firstName={firstName} lastName={lastName} age={age}></Employee>
}

function Head(props){
  var p = {...props}
  return <Employee firstName={p.cc} lastName={p.dd} age={p.ee}></Employee>
}

function LabComponent() {
  return (
    <div className="App">
      <Employee firstName="Morakot " lastName="Nakhum" age={25}></Employee>
      <Leader xx="Morakot " aa="Nakhum" bb={30}></Leader>
      <Head cc="Morakot" dd="Nakhum"  ee={40} ></Head>
     </div>
  );
}

export default LabComponent;


