import hero from "../Video/hero_section.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src={hero}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      ></video>
    </div>
  );
};

export default Video;
