

const CommonBanner = ({ img, head, para }) => {
    return (
        <div className="w-full md:w-4/5 mx-auto my-20">
            <div className={`bg-[url('${img}')] p-16 md:p-28 bg-cover`}>
                <div className="bg-black bg-opacity-80 p-5 md:p-28 text-white text-center space-y-4">
                    <h2 className="font-cinzel text-3xl md:text-4xl">{head}</h2>
                    <p>{para}</p>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;