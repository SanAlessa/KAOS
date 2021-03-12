import React, { Component } from "react";
import Slider from "react-slick"
import ScrollBanner from './ScrollBanner'

const fotos = [
  { url: "homeBack1.png" },
  { url: "homeBack2.png" }
]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      className: "slider",
      infinite: true,
      slidesToShow: 1,
      rows: 1,
      slidesPerRow: 1,
      autoplay: true,
      autoplaySpeed: 1600,
      fade: true,
      pauseOnDotsHover: true,
    };

    return (
        <div className='containerCarousel'>
          <Slider {...settings}>
            {fotos.map(foto => {
              const fotito = require(`../assets/${foto.url}`)
              return (
                <div key={foto.url} className="carrusel">
                  <div style={{ backgroundImage: `url("${fotito.default}")`, height: "100vh", width: "100vw", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
                </div>
              )
            })}

          </Slider>
          <div className="banner">
            <ScrollBanner />
          </div>

        </div>
    )
  }
}