import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container } from "@material-ui/core"
import CardFilter from "./card-filter"
import styled from "styled-components"
import Arrow from './filter-arrow'

import AmazingPools from '../assets/img/img-icon-carousel/AmazingPools.jpeg'
import AmazingViews from '../assets/img/img-icon-carousel/AmazingViews.jpeg'
import Arctic from '../assets/img/img-icon-carousel/Arctic.jpeg'
import Beach from '../assets/img/img-icon-carousel/Beach.jpeg'
import Beachfront from '../assets/img/img-icon-carousel/Beachfront.jpeg'
import Cabins from '../assets/img/img-icon-carousel/Cabins.jpeg'
import Camping from '../assets/img/img-icon-carousel/Camping.jpeg'
import Castles from '../assets/img/img-icon-carousel/Castles.jpeg'
import Caves from '../assets/img/img-icon-carousel/Caves.jpeg'
import Countryside from '../assets/img/img-icon-carousel/Countryside.jpeg'
import Desert from '../assets/img/img-icon-carousel/Desert.jpeg'
import Design from '../assets/img/img-icon-carousel/Design.jpeg'
import Domes from '../assets/img/img-icon-carousel/Domes.jpeg'
import Farms from '../assets/img/img-icon-carousel/Farms.jpeg'
import Islands from '../assets/img/img-icon-carousel/Islands.jpeg'
import Lakefront from '../assets/img/img-icon-carousel/Lakefront.jpeg'
import Luxe from '../assets/img/img-icon-carousel/Luxe.jpeg'
import NationalParks from '../assets/img/img-icon-carousel/NationalParks.jpeg'
import Omg from '../assets/img/img-icon-carousel/Omg.jpeg'
import Surfing from '../assets/img/img-icon-carousel/Surfing.jpeg'
import Towers from '../assets/img/img-icon-carousel/Towers.jpeg'
import Tropical from '../assets/img/img-icon-carousel/Tropical.jpeg'
import Yurts from '../assets/img/img-icon-carousel/Yurts.jpeg'


export class AppFilterOld extends Component {

    render() {

        const settings = {
            breakpoint: 1024,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 9,
            rows: 1,
            initialSlide: 0,
            slidesToScroll: 7,
            // arrows: false,
            prevArrow: <Arrow isBack={true} />,
            nextArrow: <Arrow isBack={false} />,
            // centerMode: true,
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 8,
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
    .slick-track {
      padding-bottom: 1px;
      font-size: 12px;
    //   displey: flex;
    }
    .content-carousel {
    //   width: 20%;

    }
    .filter-content {
      text-align: center;
      align-items: center;

    }
    .filter-content:hover {
      padding-bottom: 15px;

    }
    `
        return (

            <Container maxWidth={false}
                style={{ boxShadow: "none", }}
            >

                <StyledSlider

                    {...settings}
                    style={{
                        height: "5px",
                    }}
                >
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Amazing pools`} >
                            <CardFilter image={AmazingPools} />
                            <div className='filter-content'>Amazing pools</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Amazing views`} >
                            <CardFilter image={AmazingViews} />
                            <div className='filter-content'>Amazing Views</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Arctic`} >
                            <CardFilter image={Arctic} />
                            <div className='filter-content'>Arctic</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Beach`} >
                            <CardFilter image={Beach} />
                            <div className='filter-content'>Beach</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Beachfront`} >
                            <CardFilter image={Beachfront} />
                            <div className='filter-content'>Beachfront</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Cabins`} >
                            <CardFilter image={Cabins} />
                            <div className='filter-content'>Cabins</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Camping`} >
                            <CardFilter image={Camping} />
                            <div className='filter-content'>Camping</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Castles`} >
                            <CardFilter image={Castles} />
                            <div className='filter-content'>Castles</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Caves`} >
                            <CardFilter image={Caves} />
                            <div className='filter-content'>Caves</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Countryside`} >
                            <CardFilter image={Countryside} />
                            <div className='filter-content'>Countryside</div>
                        </Link>
                    </div>

                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Desert`} >
                            <CardFilter image={Desert} />
                            <div className='filter-content'>Desert</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Design`} >
                            <CardFilter image={Design} />
                            <div className='filter-content'>Design</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Domes`} >
                            <CardFilter image={Domes} />
                            <div className='filter-content'>Domes</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Farms`} >
                            <CardFilter image={Farms} />
                            <div className='filter-content'>Farms</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Islands`} >
                            <CardFilter image={Islands} />
                            <div className='filter-content'>Islands</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Lakefront`} >
                            <CardFilter image={Lakefront} />
                            <div className='filter-content'>Lakefront</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Luxe`} >
                            <CardFilter image={Luxe} />
                            <div className='filter-content'>Luxe</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/National parks`} >
                            <CardFilter image={NationalParks} />
                            <div className='filter-content'>National parks</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Omg`} >
                            <CardFilter image={Omg} />
                            <div className='filter-content'>OMG!</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Surfing`} >
                            <CardFilter image={Surfing} />
                            <div className='filter-content'>Surfing</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Towers`} >
                            <CardFilter image={Towers} />
                            <div className='filter-content'>Towers</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Tropical`} >
                            <CardFilter image={Tropical} />
                            <div className='filter-content'>Tropical</div>
                        </Link>
                    </div>
                    <div className="content-carousel">
                        <Link to={`/stay/explore/type/Yurts`} >
                            <CardFilter image={Yurts} />
                            <div className='filter-content'>Yurts</div>
                        </Link>
                    </div>

                </StyledSlider>
            </Container >
        )
    }
}
