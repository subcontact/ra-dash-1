import React from "react";
import * as Vibrant from "node-vibrant";
import Ptop from "./Ptop.js";
import Pdesc from "./Pdesc.js";
import Pimg from "./Pimg.js";
import "./styles.scss";

class Pbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  vibrantColor(src, mod) {
    let color;
    //console.log(path);
    let v = new Vibrant.from(src);
    v.getPalette((err, palette) => {
      this.color = palette.Vibrant.getHex();
    });
    color = v.getPalette((err, palette) => {
      //console.log(Vibrant.Util.rgbToHex(palette.Vibrant._rgb));
      //console.log(palette.Vibrant.getHex());
      //1. Take a copy of the current state
      let color = this.state.color;
      //2. Update that state
      switch (mod) {
        case "Vibrant":
          color = palette.Vibrant.getHex();
          break;
        case "Muted":
          color = palette.Muted.getHex();
          break;
        case "DarkVibrant":
          color = palette.DarkVibrant.getHex();
          break;
        case "DarkMuted":
          color = palette.DarkMuted.getHex();
          break;
        case "LightVibrant ":
          color = palette.LightVibrant.getHex();
          break;
        default:
          color = palette.Vibrant.getHex();
      }
      //3. Set that to state
      this.setState({ color });
    });
  }

  componentDidMount() {
    this.vibrantColor(this.props.src, this.props.mod); //Get vibrant color at Component Mount
  }

  render() {
    const { price, src, mod, category, name, ...rest } = this.props;
    const { color } = this.state;
    return (
      <div className="p-box">
        <Ptop price={price} color={color} />
        <Pimg src={src} />
        <Pdesc
          color={color}
          category={category}
          name={name}
          style={{
            selection: { background: "yellow" }
          }}
        />
      </div>
    );
  }
}

export default Pbox;
