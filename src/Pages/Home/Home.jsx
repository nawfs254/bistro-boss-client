import CommonBanner from "../../Shared/CommonBanner";
import Banner from "./Banner";
import CheffsRec from "./CheffsRec";
import ContactNo from "./ContactNo";
import OrderOnline from "./OrderOnline";
import OurMenu from "./OurMenu";
import OurMenuSlider from "./OurMenuSlider";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div className="-mt-0 md:-mt-32">
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <div className="w-full md:w-4/5 mx-auto">
                <CommonBanner img={'https://iili.io/JPyIc7a.jpg'} head="Bistro Boss" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></CommonBanner>
            </div>
            <OurMenu></OurMenu>
            <ContactNo></ContactNo>
            <CheffsRec></CheffsRec>
            <OurMenuSlider></OurMenuSlider>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;