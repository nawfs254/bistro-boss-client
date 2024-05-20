import CommonBanner from "../../Shared/CommonBanner";
import AllItems from "./AllItems";
// import bannerImg from "../../../resources/assets/menu/banner3.jpg"

const OurMenuPage = () => {
    return (
        <div>
            <CommonBanner img="https://iili.io/JiCVQBn.jpg" head="Our Menu" para="Would you like to try a dish?"></CommonBanner>
            <AllItems></AllItems>
        </div>
    );
};

export default OurMenuPage;