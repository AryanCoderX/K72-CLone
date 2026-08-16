const Card = ({ url, onMouseEnter, onMouseLeave }) => {
    return (
        <>
        <div
            className="card group relative h-[20vh] w-[49%] mt-[0.5%] overflow-hidden cursor-pointer bg-gray-300 hover:rounded-[2em] duration-300 flex justify-center items-center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                src={url}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <h4 className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="border-2 border-white px-4 py-1 rounded-full text-white text-6xl uppercase font-[MyFont] font-bold">
                    View Project
                </span>
            </h4>
        </div>
        </>
    );
};

export default Card;
