import ReactStarsRating from 'react-awesome-stars-rating';

import reviewImg from "../../../resources/assets/icon/review.svg"

const ReviewCard = ({ review }) => {

    return (
        <div className='my-10'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    <ReactStarsRating value={3} className="flex"></ReactStarsRating>
                </div>
                <div className='w-32 h-32'>
                    <img src={reviewImg} alt="" className='w-32 h-32' />
                </div>
                <p className='w-4/5'>{review.details}</p>
                <p className='text-yellow-600 uppercase font-bold'>{review.name}</p>
            </div>
        </div>
    );
};

export default ReviewCard;