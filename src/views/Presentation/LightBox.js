import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import defaultimage from "assets/img/lightbox.png";
import img1 from "assets/img/products/1.jpg";
import img2 from "assets/img/products/2.jpg";
import img3 from "assets/img/products/3.jpg";
import img4 from "assets/img/products/4.jpg";
import img5 from "assets/img/products/5.jpg";
import img6 from "assets/img/products/6.jpg";
import img7 from "assets/img/products/7.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];
 
export default class ImageLightBox extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        {/* <button type="button"> */}
            <div className="product-img"  onClick={() => this.setState({ isOpen: true })}>
                <img src={defaultimage} alt="" />
            </div>
        {/* </button> */}
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}