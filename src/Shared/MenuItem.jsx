const MenuItem = ({img, title, desc, price}) => {
    return (
        <div className="flex flex-col md:flex-row w-full md:w-4/5 gap-2 md:gap-5 items-center text-center md:text-left bg-base-200 py-5 px-10">
            <img src={img} alt="" className="w-28 rounded-b-full rounded-tr-full" />

            <div>
                <div className="flex justify-between items-center">
                    <p className="font-cinzel text-lg md:text-xl my-2">{title}</p>
                    <p className="text-yellow-600 text-lg md:text-xl">${price}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default MenuItem;