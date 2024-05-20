import Button from "../../Shared/Button";
import Title from "../../Shared/Title";

const OurMenuSliderDesign = ({img, recipeName, recipe}) => {
    return (
        <div className="design w-full p-10 mb-10">
            <Title subtitle="Check it out" title="FROM OUR MENU" color="white"></Title>
            <div className="flex w-full gap-10 justify-center p-20 mb-20 items-center">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <div className="text-left text-white">
                    <p>March 20, 2023</p>
                    <p className="text-2xl font-bold">{recipeName}</p>
                    <p>{recipe}</p>
                </div>
                <div className="text-left">
                <Button text="Read More"></Button>
                </div>
            </div>

        </div>
        </div>
    );
};

export default OurMenuSliderDesign;