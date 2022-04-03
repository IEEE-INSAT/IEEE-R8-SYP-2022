import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

function Card(props) {
      return <>
      <div style={MyCarousel.CARD_STYLE}>
      {props.name}
      {/*will add other card props*/}
      </div>
      </>;
  }

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "450px",
      width: "300px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#eee",
      color: "#000",
      fontFamily: "sans-serif",
      fontSize: "14px",
      textTransform: "uppercase",
      borderRadius: "8px",
      margin: "0 200px",
      boxSizing: "border-box",


    };
  }
  

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel
          autoplay={false}
          autoplay_speed={2500}
          spread={"wide"}
          disable_box_shadow={true}
        >
        <Card name="mohsen"/>
        <Card name="ali"/>
        <Card name="salah"/>
        <Card name="fathi"/>
        <Card name="tofla"/>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;
