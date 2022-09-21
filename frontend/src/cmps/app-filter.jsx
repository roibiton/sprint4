import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//---------ICONS-------------

import {
  FaCampground,
  FaCity,
  FaHome,
  FaSwimmingPool,
  FaUmbrellaBeach,
} from 'react-icons/fa'
import { SiInkscape } from 'react-icons/si'
import { BiSliderAlt } from 'react-icons/bi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { GrOverview } from 'react-icons/gr'
import {
  GiFamilyHouse,
  GiIsland,
  GiPalmTree,
  GiWaveSurfer,
  GiWoodCabin,
  GiMushroomHouse,
  GiPisaTower,
  GiCaveEntrance,
  GiFarmTractor,
  GiCastle,
  GiChefToque,
} from 'react-icons/gi'

export class AppFilter extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 10,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
      ],
    }
    return (
      <section className="container-carousel">
        <div className="main-carousel">
          <Slider {...settings}>
            <Link to={`/stay/explore/Island`} className="explore">
              <div>
                <h3>
                  <GiIsland />
                </h3>
                <h4>Island</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Homes`} className="explore">
              <div>
                <h3>
                  <FaHome />
                </h3>
                <h4>Homes</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/House`} className="explore">
              <div>
                <h3>
                  <GiFamilyHouse />
                </h3>
                <h4>House</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/City`} className="explore">
              <div>
                <h3>
                  <FaCity />
                </h3>
                <h4>City</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Camping`} className="explore">
              <div>
                <h3>
                  <FaCampground />
                </h3>
                <h4>Camping</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Mounte`} className="explore">
              <div>
                <h3>
                  <SiInkscape />
                </h3>
                <h4>Mounte</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Beach`} className="explore">
              <div>
                <h3>
                  <GiWaveSurfer />
                </h3>
                <h4>Beach</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Tropical`} className="explore">
              <div>
                <h3>
                  <GiPalmTree />
                </h3>
                <h4>Tropical</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Pool`} className="explore">
              <div>
                <h3>
                  <FaSwimmingPool />
                </h3>
                <h4>Pool</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Beach`} className="explore">
              <div>
                <h3>
                  <FaUmbrellaBeach />
                </h3>
                <h4>Beach</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/WoodCabin`} className="explore">
              <div>
                <h3>
                  <GiWoodCabin />
                </h3>
                <h4>WoodCabin</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Special`} className="explore">
              <div>
                <h3>
                  <GiMushroomHouse />
                </h3>
                <h4>Special</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/FamilyHouse`} className="explore">
              <div>
                <h3>
                  <GiFamilyHouse />
                </h3>
                <h4>FamilyHouse</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Tower`} className="explore">
              <div>
                <h3>
                  <GiPisaTower />
                </h3>
                <h4>Tower</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Amazing-views`} className="explore">
              <div>
                <h3>
                  <GrOverview />
                </h3>
                <h4>Amazing views</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Cave`} className="explore">
              <div>
                <h3>
                  <GiCaveEntrance />
                </h3>
                <h4>Cave</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Farm`} className="explore">
              <div>
                <h3>
                  <GiFarmTractor />
                </h3>
                <h4>Farm</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Castle`} className="explore">
              <div>
                <h3>
                  <GiCastle />
                </h3>
                <h4>Castle</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Chef`} className="explore">
              <div>
                <h3>
                  <GiChefToque />
                </h3>
                <h4>Chef</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Beach`} className="explore">
              <div>
                <h3>
                  <GiWaveSurfer />
                </h3>
                <h4>Beach</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Tropical`} className="explore">
              <div>
                <h3>
                  <GiPalmTree />
                </h3>
                <h4>Tropical</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Pool`} className="explore">
              <div>
                <h3>
                  <FaSwimmingPool />
                </h3>
                <h4>Pool</h4>
              </div>
            </Link>
            <Link to={`/stay/explore/Beach`} className="explore">
              <div>
                <h3>
                  <FaUmbrellaBeach />
                </h3>
                <h4>Beach</h4>
              </div>
            </Link>
          </Slider>
        </div>
      </section>
    )
  }
}
