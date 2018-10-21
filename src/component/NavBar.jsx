import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

class NavBar extends Component {
  render() {
    const { items } = this.props;
    return <span> Total Item {items.length} </span>;
  }
}

export default connect(mapStateToProps)(NavBar);
