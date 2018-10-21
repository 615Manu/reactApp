import React, { Component } from "react";

const styles = {
  color: "blue",
  margin: 10
};

class Item extends Component {
  //state = {
  //value: this.props.value
  //};
  render() {
    console.log`"increment" ${() => this.handleIncrement()}`;
    return (
      <div>
        <span style={{ margin: 10 }}>Item no #{this.props.id} - </span>
        <span style={{ margin: 10 }}>{this.props.value}</span>
        <button style={styles} onClick={this.props.onIncrement(this.props.id)}>
          Increment
        </button>
        <button onClick={this.props.onDelete(this.props.id)}> Delete </button>
      </div>
    );
  }

  // handleIncrement = value => () => {
  // console.log("incremented");
  // this.setState({
  // value: this.state.value + 1
  //});
  //};
}

export default Item;
