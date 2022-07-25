import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { render } from "react-dom";

class Pdesc extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const {
      onClick,
      children,
      price,
      color,
      category,
      name,
      ...rest
    } = this.props;
    const { rating } = this.state;
    return (
      <div className="p-desc">
        <h3 className="p-category">{category}</h3>
        <h1 className="p-product">{name}</h1>
        <div className="p-stars">
          <StarRatingComponent
            name="rate"
            starCount={5}
            starColor={color}
            emptyStarColor={"gray"}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Pdesc;
