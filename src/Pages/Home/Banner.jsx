import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import bannerImg1 from "../../../resources/assets/home/01.jpg"
import bannerImg2 from "../../../resources/assets/home/02.jpg"
import bannerImg3 from "../../../resources/assets/home/03.png"
import bannerImg4 from "../../../resources/assets/home/04.jpg"
import bannerImg5 from "../../../resources/assets/home/05.png"
import bannerImg6 from "../../../resources/assets/home/06.png"

const Banner = () => {
    return (
        <div className="bg-white text-center">
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false} stopOnHover={false}>
                <div>
                    <img src={bannerImg1} alt="" className="max-h-[750px]" />
                </div>

                <div>
                    <img src={bannerImg2} alt="" className="max-h-[750px]" />
                </div>

                <div>
                    <img src={bannerImg3} alt="" className="max-h-[750px]" />
                </div>

                <div>
                    <img src={bannerImg4} alt="" className="max-h-[750px]" />
                </div>

                <div>
                    <img src={bannerImg5} alt="" className="max-h-[750px]" />
                </div>

                <div>
                    <img src={bannerImg6} alt="" className="max-h-[750px]" />
                </div>
            </Carousel>
        </div>
    );
};


export default Banner;