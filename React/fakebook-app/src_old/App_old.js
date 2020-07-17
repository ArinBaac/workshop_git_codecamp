import React from 'react';
import logo from './logo.svg';
import './App.css';


class FakeBook_comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentContent: props.commentContent,
      foodCostTb: props.foodCostTb,
      isUpdate : false
    }
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if(prevProps.commentContent != this.props.commentContent){
      this.setState({
        commentContent: this.props.commentContent,
      foodCostTb: this.props.foodCostTb,
      isUpdate : true
      });
    }
  }

  addComment = () => {
    this.props.addFoodItem(this.state.commentContent, this.state.foodCostTb);
  }
  updateComment = () => {
    this.props.doUpdateFoodItem (this.state.commentContent, this.state.foodCostTb);
  }
  render() {
    return <div>
      <div>
        Food Name
      </div>
      <div>
        <input value={this.state.commentContent} onChange={(e) => {
          this.setState({
            commentContent: e.target.value
          });
        }}></input>
      </div>
      <div>Food Cost </div>
      <div>
        <input value={this.state.foodCostTb} onChange={(e) => {
          this.setState({
            foodCostTb: e.target.value
          })
        }}></input>
      </div>
      <div>
      <button onClick={this.state.isUpdate ? this.updateComment : this.addComment} > {this.state.isUpdate ? "Update" : "Add"}</button>
      </div>
    </div>
  }
}

class CommentTable extends React.Component {
  constructor(props) {
    super(props); // foodItems
  }
  render() {
    return <div>
      {this.props.foodItems.map((foodItem) =>
        <div>
          <span style={{ marginRight: 20 }}>{foodItem.foodName}</span>
          <span>{foodItem.foodCost}</span>
          <button onClick={() => {
            if (foodItem.isEditing) {
            } else {
              this.props.startEditFoodItem(foodItem.foodName);
            }
          }}>{foodItem.isEditing ? "Process" : "Edit"} </button>
          <button onClick={() => {
            this.props.deleteFoodItem(foodItem.foodName)
          }}>Delete</button>
        </div>)}
    </div>
  }
}

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [
        {
          foodName: "Rice",
          foodCost: "200",
          isEditing: false,
        },
        {
          foodName: "Soup",
          foodCost: "50",
          isEditing: false
        }
      ],
      commentContent: "",
      foodCostTb: "",
    };
  }
  deleteFoodItem = (foodName) => {
    var newFoodItems = this.state.foodItems.filter((foodItem) => foodItem.foodName !== foodName);
    this.setState({
      foodItems: newFoodItems
    });
  }

  addFoodItem = (foodName, foodCost) => {
    this.state.foodItems.push({
      foodName: foodName,
      foodCost: foodCost
    });
    this.setState({
      foodItems: this.state.foodItems
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
      commentContent: updatedFoodItem.foodName,
      foodCostTb: updatedFoodItem.foodCost
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
      <div style={{ marginLeft: 50 }}>
        <CommentTable startEditFoodItem={this.startEditFoodItem} deleteFoodItem={this.deleteFoodItem} foodItems={this.state.foodItems}></CommentTable>
        <FoodInput doUpdateFoodItem={this.doUpdateFoodItem} commentContent={this.state.commentContent} foodCostTb={this.state.foodCostTb} addFoodItem={this.addFoodItem}></FoodInput>
      </div>
    )
  }
}

export default App;
