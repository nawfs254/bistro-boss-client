import Button from "./Button";

const ItemCard = ({img, saladName, recipe}) => {
    return (
        <div className="mx-auto text-center space-y-3 bg-base-200">
            <img src={img} alt="" className="w-full" />

            <div className="p-2">
                <div className="space-y-2">
                <p className="text-2xl font-semibold">{saladName}</p>
                <p>{recipe}</p>
                </div>
                <Button text="Add to Cart"></Button>
            </div>
        </div>
    );
};

export default ItemCard;