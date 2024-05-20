import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import ItemCard from "../../Shared/ItemCard";

const CheffsRec = () => {
    const [ourItems, setOurItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(newData => newData.category === "salad")
                setOurItems(popularItems)
            })
    }, [])

    return (
        <div className="w-full md:w-4/5 mx-auto">
            <Title subtitle="Should Try" title="CHEF RECOMMENDS"></Title>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 my-20">
                {
                    ourItems.map(item => <ItemCard key={item._id} img={item.image} saladName={item.name} recipe={item.recipe}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default CheffsRec;