const Button = ({text}) => {
    return (
        <div>
            <button className="btn my-5 border-b-yellow-600 border-b-4 text-yellow-600 hover:bg-[#1F2937] hover:border-b-[#1F2937] hover:border-b-4">
                {text}
            </button>
        </div>
    );
};

export default Button;