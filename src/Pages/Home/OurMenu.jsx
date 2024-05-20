import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem";
import Title from "../../Shared/Title";
import Button from "../../Shared/Button";

const OurMenu = () => {

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

    return (
        <div className="w-full md:w-4/5 mx-auto flex flex-col items-center">
            <Title subtitle="Check it out" title="FROM OUR MENU"></Title>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
                {/* <MenuItem></MenuItem>
                <MenuItem></MenuItem> */}

                {
                    ourItems.map(ourItem => <MenuItem key={ourItem._id} img={ourItem.image} title={ourItem.name} desc={ourItem.recipe} price={ourItem.price}></MenuItem>)
                }
            </div>

            <div><Button text="View full menu"></Button></div>
        </div>
    );
};

export default OurMenu;