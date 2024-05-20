import Title from "../../Shared/Title";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './OrderOnline.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


// images

import slider1 from "../../../resources/assets/home/slide1.jpg"
import slider3 from "../../../resources/assets/home/slide3.jpg"
import slider4 from "../../../resources/assets/home/slide4.jpg"
import slider5 from "../../../resources/assets/home/slide5.jpg"


const OrderOnline = () => {
    return (
        <div className="bg-white my-20">
            <Title subtitle="From 11:00am to 10:00pm" title="ORDER ONLINE"></Title>

            <div className="w-full md:w-2/3 mx-auto my-5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <div>
                        <SwiperSlide>
                            <div>
                                <img src={slider1} alt="" />
                                <p className="text-2xl md:text-3xl -mt-10 text-white font-bold bg-black font-cinzel">Salad</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={slider3} alt="" />
                                <p className="text-2xl md:text-3xl -mt-10 text-white font-bold bg-black font-cinzel">Soups</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={slider4} alt="" />
                                <p className="text-2xl md:text-3xl -mt-10 text-white font-bold bg-black font-cinzel">Pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={slider5} alt="" />
                                <p className="text-2xl md:text-3xl -mt-10 text-white font-bold bg-black font-cinzel">Desserts</p>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;