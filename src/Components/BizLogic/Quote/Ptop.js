import React from "react";
import Dinero from "dinero.js";
import { FaHeart } from "react-icons/fa";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Ptop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isClicked: !this.state.isClicked
    });
    //console.log(this.state.isClicked);
  }
  render() {
    const { onClick, price, color, ...rest } = this.props;
    const { isClicked } = this.state;

    return (
      <div className="p-top">
        <FaHeart
          className="p-heart"
          style={{
            color: `${isClicked ? "#cd486b" : "gray"}`,
            cursor: "pointer"
          }}
          onClick={e => this.handleToggle(e)}
        />
        <span className="p-price">
          {Dinero({ amount: price }).toFormat("$0,0.00")}
        </span>
      </div>
    );
  }
}

export default Ptop;
