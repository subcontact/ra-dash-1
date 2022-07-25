import React from "react";

class Pimg extends React.Component {
  render() {
    const { onClick, src, ...rest } = this.props;
    return (
      <div className="p-img">
        <img src={src} alt="" />
      </div>
    );
  }
}

export default Pimg;
