const Title = ({title}) => {
  return (
    <div className="flex-3 h-full flex items-start justify-center ">
      <h1 className="text-[11vw] uppercase flex flex-col font-semibold leading-[0.8] w-full text-center text-white">
        <span>To talk</span>
        {title
          .replace(/^To talk\s*/i, "")
          .split(" ")
          .map((word, index) => (
            <span key={index}>{word}</span>
          ))}
      </h1>
    </div>
  );
};

export default Title;
