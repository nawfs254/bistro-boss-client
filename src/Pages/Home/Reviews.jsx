import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import './OrderOnline.css'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../Shared/Title';
import ReviewCard from './ReviewCard';



const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='w-full md:w-4/5 mx-auto'>
            <Title subtitle="What Our Clients Say" title="TESTIMONIALS"></Title>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;