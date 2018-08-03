import React, { Component } from "react";
import Carousel from "nuka-carousel";

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "600px",
      slideWidth: "600px"
    };
  }

  render() {
    return (
      <div className="ImageCarousel">
        <Carousel width={this.state.width} slideWidth={this.state.slideWidth}>
          <img
            height="300px"
            src="https://i.kym-cdn.com/entries/icons/original/000/009/242/yolo.jpg"
          />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        </Carousel>
      </div>
    );
  }

  resize = () => {
    if (window.innerWidth < 800) {
      this.setState({
        width: "100%",
        slideWidth: String(window.innerWidth) + "px"
      });
    } else {
      this.setState({
        width: "600px",
        slideWidth: "600px"
      });
    }
  };

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.resize);
  }
}

export default ImageCarousel;
