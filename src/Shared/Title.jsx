const Title = ({subtitle, title, color}) => {
    return (
        <div className="text-center my-5">
            <p className="text-yellow-600 m-2">---{subtitle}---</p>
            <p className={`text-${color} text-3xl md:text-4xl border-[#E8E8E8] border-t-4 border-b-4 w-fit mx-auto p-3`}>{title}</p>
        </div>
    );
};

export default Title;