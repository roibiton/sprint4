import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container } from "@material-ui/core"
import CardFilter from "./card-filter"
import styled from "styled-components"
import Arrow from './filter-arrow'
// import { ModalFilter } from './modal-filter'

const images = require.context('../assets/img/img-icon-carousel/', false, /\.(png|jpe?g|svg)$/).keys()

export class AppFilter extends Component {

  render() {

    const settings = {
      breakpoint: 1024,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 9,
      arrow: true,
      rows: 1,
      initialSlide: 0,
      slidesToScroll: 7,
      prevArrow: <Arrow isBack={true} />,
      nextArrow: <Arrow isBack={false} />,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
      ],
    }
    const StyledSlider = styled(Slider)`
      .slick-slide {
        // width: none;
        text-align: center;
      }

      .slick-track {
        // opacity: .1;
      }

      .content-carousel {
        // font-size: 50px;
        padding-bottom: 10px;

      }

      .filter-content {
        margin: auto;
        font-size: 12px;
        color: black;
        padding-bottom: 10px;
      }

      *>.slick-slide {
        opacity: .5;
      }

      *>.slick-slide:hover {
        opacity: .7;
      }

      .slick-slide:hover .filter-content {
        border-bottom: 2px solid var(--clr3);
        opacity: .8
      }
      .slick-disabled {
        display: none; 
        pointer-events:none;
      }`

    return (

      <Container maxWidth={false}
        style={{ boxShadow: "none" }}
      >

        <StyledSlider
          {...settings}
          style={{
            // height: "5px",
          }}
        >

          {images.map(img => {
            const fileName_ext = img.replace('./', '')
            const cleanFileName = img.replace('.jpeg', '').replace('./', '')
            const SpacedFileName = cleanFileName.replace(/[A-Z]/g, ' $&').trim()
            return <div className="content-carousel">
              <Link key={'card-link' + fileName_ext}
                to={`/stay/explore/type/${fileName_ext}`}>

                <CardFilter key={'filter-card-img' + cleanFileName}
                  image={cleanFileName}
                />

                <span key={'filter-card-content' + cleanFileName} className='filter-content'>
                  {SpacedFileName}
                </span>

              </Link>
            </div>

          })}

        </StyledSlider>
      </Container >
    )
  }
}
