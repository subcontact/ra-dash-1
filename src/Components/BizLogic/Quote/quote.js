import React, { Component } from "react";
import { render } from "react-dom";
//import hexToRgba from 'hex-to-rgba';
import Pbox from "./Pbox.js";
import "./index.scss";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  render() {
    return (
      <div className="products">
        <Pbox
          price={10999}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/61A5ZRXURDL._SL1000_.jpg"
          }
          category={"Smart Home"}
          name={"Echo Plus"}
          mod={"LightVibrant"}
        />
        <Pbox
          price={94900}
          src={"https://cdn.tactic-center.com/Demos/P20-Pro.jpg"}
          category={"Smartphone"}
          name={"Huawei P20 Pro"}
          mod={"Muted"}
        />
        <Pbox
          price={79900}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/41CzEivCB7L._SL500_AC_SS350_.jpg"
          }
          category={"Smart Phone"}
          name={"iPhone XR Yellow"}
          mod={"LightVibrant"}
        />

        <Pbox
          price={79900}
          src={
            "https://www.gannett-cdn.com/presto/2018/09/12/USAT/8aa46ec8-fe33-447a-b8f9-188370cd201b-iPhone_XR_blue-back_09122018.jpg?width=200&height=210"
          }
          category={"Smart Phone"}
          name={"iPhone XR Blue"}
          mod={"LightVibrant"}
        />

        <Pbox
          price={69900}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/61Hm4z9uX5L._SX569_.jpg"
          }
          category={"Smart Phone"}
          name={"Huaweii P20 Pro"}
          mod={"LightVibrant"}
        />

        <Pbox
          price={29900}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/41lC43pHDvL._SL500_AC_SS350_.jpg"
          }
          category={"Accesory"}
          name={"Apple Beads"}
          mod={"Muted"}
        />
        <Pbox
          price={99900}
          src={
            "https://www.courts.com.sg/media/catalog/product/cache/small_image/300x300/e59e95a091f53536053c37d045d3b5a9/i/p/ip123775_00.jpg"
          }
          category={"Tablet"}
          name={"iPad Pro"}
          mod={"LightVibrant"}
        />
        <Pbox
          price={3999}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/61ikAJnULvL._SL1000_.jpg"
          }
          category={"Smart Home"}
          name={"Echo Dot "}
          mod={"LightVibrant"}
        />
      </div>
    );
  }
}

export default Quote;
