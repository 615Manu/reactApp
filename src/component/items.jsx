import React, { Component } from "react";
import Item from "./item";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    items: state.items
    //items
  };
}

const Person = {
  myMethod: () => {
    console.log("this is", this);
  }
};
Person.myMethod();
const newMthod = Person.myMethod;
newMthod();
const myNew = newMthod.bind(Person);
myNew();

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: newItems => dispatch({ type: "DECREMENT", payload: newItems }),
    reset: () => dispatch({ type: "RESET" })
  };
}
class Items extends Component {
  //state = {
  //items: [
  //{ id: 1, value: 0 },
  //{ id: 2, value: 2 },
  //{ id: 3, value: 0 },
  //{ id: 4, value: 0 }
  //]
  //};

  handleReset = () => {
    const { items, reset } = this.props;
    items.map(item => (item.value = 0));
    reset();
    //console.log("rest", newitems);
    //this.setState({
    //items
    //});
  };
  render() {
    const { items } = this.props;
    console.log("props of items", this.props);
    return (
      <div>
        <button style={{ margin: 10, color: "red" }} onClick={this.handleReset}>
          {" "}
          Reset{" "}
        </button>
        {items.map(item => (
          <Item
            key={item.id}
            value={item.value}
            id={item.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }

  handleDelete = id => () => {
    const { items, decrement } = this.props;
    console.log("deleting..", id);
    const newItems = items.filter(item => item.id !== id);
    //console.log("delte", newitems);
    console.log("items in delete", newItems);
    decrement(newItems);
    //this.setState({
    //items
    //});
  };

  handleIncrement = id => () => {
    console.log("incremented");
    const { items, increment } = this.props;
    items.map(
      item => (item.id === id ? item.value++ : item.value)
      //return item;
    );
    increment();
    // console.log("incres=ase", newitems);
    // this.setState({
    // items
    //});
  };
}

//export default Items;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
