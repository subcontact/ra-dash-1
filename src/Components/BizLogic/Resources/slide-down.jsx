import React from "react";

const slideDownStyle = {
  overflow: "hidden"
};
const slideDownInnerStyle = {
  marginTop: -1,
  paddingTop: -1
};

export default class SlideDown extends React.PureComponent {
  static defaultProps = {
    duration: 300,
    slideOnMount: false
  };

  constructor(props) {
    super(props);
    console.log("SlideIn.ctor");

    this.el = React.createRef();
    this.innerEl = React.createRef();

    this.state = {
      state: props.show ? "mounting" : "up"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.show !== this.props.show) {
      if (this.props.show) {
        this.slideDown();
      } else {
        this.slideUp();
      }
    }
    if (prevState.state !== this.state.state) {
      if (this.props.onChange) {
        this.props.onChange(this.state.state);
      }
    }
  }
  componentDidMount() {
    if (this.props.show) {
      if (this.props.slideOnMount) {
        this.slideDown();
      }
    } else {
      const el = this.el.current;
      el.style.height = "0px";
    }
  }
  componentWillUnmout() {
    this._mounted = false;
  }

  slideDown() {
    const el = this.el.current;
    const innerEl = this.innerEl.current;

    el.style.height = "auto"; // <- render in desired height

    const prevHeight = "0px";
    const nextHeight = getComputedStyle(el).height;
    const duration = this.distanceToDuration(nextHeight);

    el.style.height = prevHeight;
    el.offsetHeight; // force repaint
    el.style.transition = `height ${duration}ms ease-in-out`;
    el.style.height = nextHeight;

    innerEl.style.transform = "translateY(-100%)";
    innerEl.offsetHeight; // force repaint
    innerEl.style.transition = `transform ${duration}ms ease-in-out`;
    innerEl.style.transform = "translateY(0)";

    this.setState({ state: "sliding-down" });

    const self = this;
    el.addEventListener(
      "transitionend",
      function transitionEnd(event) {
        if (this._mounted === false) {
          return;
        }
        if (event.propertyName === "height") {
          el.style.transition = "";
          el.style.height = "auto";
          el.removeEventListener("transitionend", transitionEnd, false);

          innerEl.style.transition = "";

          self.setState({ state: "down" });
        }
      },
      false
    );
  }
  slideUp() {
    const el = this.el.current;
    const innerEl = this.innerEl.current;

    const prevHeight = getComputedStyle(el).height;
    const nextHeight = "0px";
    const duration = this.distanceToDuration(prevHeight);

    el.style.height = prevHeight;
    el.offsetHeight; // force repaint
    el.style.transition = `height ${duration}ms ease-in-out`;
    el.style.height = nextHeight;

    innerEl.style.transform = "translateY(0)";
    innerEl.offsetHeight; // force repaint
    innerEl.style.transition = `transform ${duration}ms ease-in-out`;
    innerEl.style.transform = "translateY(-100%)";

    this.setState({ state: "sliding-up" });

    const self = this;
    el.addEventListener(
      "transitionend",
      function transitionEnd(event) {
        if (this._mounted === false) {
          return;
        }
        if (event.propertyName === "height") {
          el.style.transition = "";
          el.removeEventListener("transitionend", transitionEnd, false);

          innerEl.style.transition = "";

          self.setState({ state: "up" });
        }
      },
      false
    );
  }

  distanceToDuration(pixels) {
    /*
    pixels = parseInt(pixels, 10);
    return (1000 * pixels) / this.props.pixelsPerSecond;
    */
    return this.props.duration;
  }

  render() {
    const { children } = this.props;
    const renderChildren = this.state.state !== "up" || this.props.show;

    return (
      <div className="slidein" ref={this.el} style={slideDownStyle}>
        <div ref={this.innerEl} style={slideDownInnerStyle}>
          {renderChildren ? children : null}
        </div>
      </div>
    );
  }
}
