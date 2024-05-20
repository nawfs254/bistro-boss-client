import { Swiper, SwiperSlide } from "swiper/react";
import "./OrderOnline.css";

import { useEffect, useState } from "react";
import OurMenuSliderDesign from "./OurMenuSliderDesign";

import "./OurMenuSliderDesign.css"

const OurMenuSlider = () => {
    const [ourItems, setOurItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(newData => newData.category === "popular")
                setOurItems(popularItems)
                return
            })
    }, [])

    console.log(ourItems)

    return (
        <div >
            <Swiper className="mySwiper">
                {
                    ourItems.map(item => <div key={item._id}>
                        <SwiperSlide>
                            <OurMenuSliderDesign img={item.image} recipeName={item.name} recipe={item.recipe}></OurMenuSliderDesign>
                        </SwiperSlide>
                    </div>)
                }
            </Swiper>
        </div>
    );
};

export default OurMenuSlider;