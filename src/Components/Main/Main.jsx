import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa6";
import './main.scss'
import img from '../../Assets/taj2.jpg'
import img2 from '../../Assets/eiffel2.jpg'
import img3 from '../../Assets/Corcovado.jpg'
import img4 from '../../Assets/boat2.jpg'
import img5 from '../../Assets/greatwall.jpg'
import img6 from '../../Assets/Niagara.jpg'
import img7 from '../../Assets/sydney.jpg'
import img8 from '../../Assets/lynde.jpg'
import img9 from '../../Assets/Island.jpg'
import img10 from '../../Assets/MountFuji.jpg'
import img11 from '../../Assets/Rivera.jpg'
import img12 from '../../Assets/dubai.jpg'

import Aos from "aos";
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgsrc: img,
        destTitle: 'TajMahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: "The Taj Mahal is the one sight in India that all travelers need to see. The country is filled with incredible cities and fabulous places to visit, but the 17th-century Taj Mahal in Agra is the one place that says you've been to India.This mausoleum, commissioned by the Shah Jahan for his wife, Mumtaz Mahal, is known internationally as a symbol of love."
    },
    {
        id: 2,
        imgsrc: img2,
        destTitle: 'Eiffel Tower',
        location: ' Paris, France',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: 'The symbol of Paris and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers. Few landmarks inspire such a passion for travel as this single iron structure.Young travelers heading out on the road for the first time, couples looking for a special getaway, artists looking to spur their creativity, and romantics of all types are all drawn to Paris.'
    },
    {
        id: 3,
        imgsrc: img3,
        destTitle: 'Corcovado and Cristo Redentor, Rio de Janeiro',
        location: ' Brizal',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: "Keeping a watchful eye over the citizens of Rio de Janeiro from his perch atop Corcovado mountain is the stunning statue of Cristo Redentor. This huge 30-meter-high statue with its arms wide open in a welcoming gesture has been one of Rio's top tourist attractions since 1931.The harbor of Rio de Janeiro is one of the 7 natural wonders of the world. The views from the top of the 709-meter Corcovado look out over this beautiful sight."
    },
    {
        id: 4,
        imgsrc: img4,
        destTitle: 'Cinque Terre Day Trip from Milan',
        location: ' Italy',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: "Tap into the beauty of Italy's famous Cinque Trerre coast on this day trip from Milan.Travel in the comfort of a coach bus to the terraced landscape of five cliff-side village and experience the landscape by boat as you make your way from Monterosso to La Spezia.This tour includes plenty of free time to explore Monterosso and Manarola,as weel as a scenic train trip between the two towns."
    },
    {
        id: 5,
        imgsrc: img5,
        destTitle: 'Great Wall of China',
        location: ' China',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: "In a land of modern cities and towering skyscrapers, the Great Wall of China, built between the 14th and 17th centuries, is a stark contrast but a striking image that all visitors to China should see.A stroll along the top of the wall provides an incredible view of the structure snaking off into the distance. The wall stretches an astounding 21,196 kilometers, through some remote areas."
    },
    {
        id: 6,
        imgsrc: img6,
        destTitle: 'Niagara Falls ',
        location: ' Canada & USA',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: "On the border between the United States and Canada, these great falls have been drawing explorers and travelers for centuries. Just over an hour from the city of Toronto, Niagara Falls is easy to get to, and the town is a fun place to spend a night or two.Walk up to the edge of the falls, stroll along the paved walk lining the gorge for different views, or take a boat tour for a close-up look at the water pouring over the lip of the gorge above you."
    },
    {
        id: 7,
        imgsrc: img7,
        destTitle: 'Sydney Opera House',
        location: ' Australia',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: "Like many other attractions around the world, the Sydney Opera House is one of those places that is easy to identify and obviously associated with Australia. A photo of yourself in front of the white sails screams Australia.The Sydney Opera House was built in several stages and officially opened in late 1973. To fully experience the building, take a tour inside to see the unique shape and hear the exceptional acoustics."
    },
    {
        id: 8,
        imgsrc: img8,
        destTitle: ' Gardens by the Bay',
        location: ' Singapore',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: "Once you've glimpsed this beautifully designed green space (from the top of the Marina Bay Sands, perhaps) you won't be able to stay away. Wander through the Bay East Garden, perfect for enjoying the vibrant plant life and escaping the city bustle for a moment.You won't want to miss Supertree Grove, where you'll find a cluster of the iconic, futuristic structures designed to perform environmentally sustainable functions."
    },
    {
        id: 9,
        imgsrc: img9,
        destTitle: 'Maldives',
        location: ' South Asia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: "Strung across the Indian Ocean southwest of India and Sri Lanka, the 26 natural atolls of the Maldives exude an almost surreal beauty. This is due, in large part, to the luminous blue waters that surround them. If slipping into the crystal-clear, soul-warming sea is a top criteria for your perfect tropical vacation, this is the place to do it – water comprises 99 percent of the Maldives. Paradoxically, it also threatens to inundate the shores of this low-lying island nation."
    },
    {
        id: 10,
        imgsrc: img10,
        destTitle: 'Mount Fuji',
        location: ' Japan',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: "Mount Fuji is the most well-known and highest mountain in Japan. Often pictured snowcapped, this dormant volcano is both a spiritual site and one of the top tourist attractions in Japan. Soaring 3,776 meters high, Mount Fuji is one of three Holy Mountains, all of which are UNESCO World Heritage Sites.Hiking to the top of the mountain is a popular thing to do in Japan. Each year, nearly 300,000 people follow one of four routes to the top."
    },
    {
        id: 11,
        imgsrc: img11,
        destTitle: ' Riviera Maya',
        location: '  Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: "Wondering about the best tropical vacations on a budget? If you're looking for beautiful beaches, culture, and zesty cuisine all wrapped up with an affordable price tag, the Riviera Maya (Mayan Riviera) in Mexico is a great choice. On the tip of the Yucatán peninsula, along the Caribbean coast, the Mayan Riviera encompasses the resort destinations of Cancún, Playa del Carmen, and the island of Cozumel."
    },
    {
        id: 12,
        imgsrc: img12,
        destTitle: 'Underwater World at Dubai Aquarium',
        location: ' Dubai',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: "One of the city's top tourist attractions, the Dubai Aquarium houses 140 species of sea life in the huge suspended tank on the ground floor of the Dubai Mall.Although there is free viewing from the mall, the highlight of a visit here is entering the Underwater Zoo, with its three-story high, 270-degree views along the length of the glass-panel tunnels."
    }
]


const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right"
                    className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({
                        id, imgsrc, destTitle, location, grade,
                        fees, description
                    }) => {
                        return (
                            <div key={id} data-aos="fade-up"
                                className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgsrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <IoLocationOutline className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <FaRegClipboard className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}
export default Main 