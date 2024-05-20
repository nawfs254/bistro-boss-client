import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import MenuItem from "../../Shared/MenuItem";
import CommonBanner from "../../Shared/CommonBanner";
import Button from "../../Shared/Button";

const AllItems = () => {
    const [todaysOffer, setTodaysOffer] = useState([])
    const [salad, setSalad] = useState([])
    const [drinks, setDrinks] = useState([])
    const [dessertItems, setDessertItems] = useState([])
    const [pizzaItems, setPizzaItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(newData => newData.category === "popular")
                setTodaysOffer(popularItems)

                const dessertItems = data.filter(newData => newData.category === "dessert")
                setDessertItems(dessertItems)

                const pizzaItems = data.filter(newData => newData.category === "pizza")
                setPizzaItems(pizzaItems)

                const saladItems = data.filter(newData => newData.category === "salad")
                setSalad(saladItems)

                const drinksItems = data.filter(newData => newData.category === "drinks")
                setDrinks(drinksItems)

            })
    }, [])

    return (
        <div>
            <Title subtitle="Don't miss" title="TODAY'S OFFER"></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 mt-20 w-full md:w-4/5 mx-auto">
                {
                    todaysOffer.map(item => <MenuItem key={item._id} img={item.image} title={item.name} desc={item.recipe} price={item.price}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Button text="ORDER YOUR FAVOURITE FOOD"></Button>
            </div>

            <CommonBanner img="https://iili.io/JPyIc7a.jpg" head="DESSERTS" para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></CommonBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 mt-20 w-full md:w-4/5 mx-auto">
                {
                    dessertItems.map(item => <MenuItem key={item._id} img={item.image} title={item.name} desc={item.recipe} price={item.price}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Button text="ORDER YOUR FAVOURITE FOOD"></Button>
            </div>


            <CommonBanner img="https://iili.io/JPyIc7a.jpg" head="PIZZAS" para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></CommonBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 mt-20 w-full md:w-4/5 mx-auto">
                {
                    pizzaItems.map(item => <MenuItem key={item._id} img={item.image} title={item.name} desc={item.recipe} price={item.price}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Button text="ORDER YOUR FAVOURITE FOOD"></Button>
            </div>

            <CommonBanner img="https://iili.io/JPyIc7a.jpg" head="SALAD" para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></CommonBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 mt-20 w-full md:w-4/5 mx-auto">
                {
                    salad.map(item => <MenuItem key={item._id} img={item.image} title={item.name} desc={item.recipe} price={item.price}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Button text="ORDER YOUR FAVOURITE FOOD"></Button>
            </div>

            <CommonBanner img="https://iili.io/JPyIc7a.jpg" head="SOUPS" para="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></CommonBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5 mt-20 w-full md:w-4/5 mx-auto">
                {
                    drinks.map(item => <MenuItem key={item._id} img={item.image} title={item.name} desc={item.recipe} price={item.price}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Button text="ORDER YOUR FAVOURITE FOOD"></Button>
            </div>
        </div>
    );
};

export default AllItems;