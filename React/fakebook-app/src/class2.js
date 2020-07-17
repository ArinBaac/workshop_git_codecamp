import React from 'react';
import logo from './logo.svg';
import './App.css';

const TestFunction = (props) => {
  return <div>test</div>
}

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    };
  }
  render() {
    return (
      <div>
        This is a test for React State {this.state.counter}
      </div>
    )
  }
}

function App() {
  return (
    <TestClass />
  );
}

export default App;