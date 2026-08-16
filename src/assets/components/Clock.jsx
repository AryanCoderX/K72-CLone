import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const montrealTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(time);

  return (
    <div className="text-white font-[MyFont] text-xl flex justify-center gap-2 items-center overflow-visible">
        <Globe size={36} strokeWidth={1} />
        <div>MONTREAL_{montrealTime}</div>
    </div>
  );
}

export default Clock;