import React, { useEffect } from "react";
import './home.css'
import './home.scss'
import { GrLocation } from "react-icons/gr"
import { HiFilter } from 'react-icons/hi'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from "aos";
import 'aos/dist/aos.css'


import video from '../../Assets/video123.mp4'
const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up"
                        className="smallText">
                        Our Package
                    </span>
                    <h1 data-aos="fade-up"
                        className="homeTitle">
                        Search your Holidays
                    </h1>
                </div>
                <div data-aos="fade-up"
                    className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter Name here ...." />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Search your date:
                        </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price</label>
                            <h3 className="total">$10000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>
                </div>
                <div data-aos="fade-up"
                    className="homeFooterIcons flex">
                    <div className="rigthIcons">
                        <FiFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Home