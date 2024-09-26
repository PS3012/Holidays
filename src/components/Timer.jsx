import { useEffect, useState } from "react";
import { GiSandsOfTime } from "react-icons/gi";

function Timer(_props) {
     const [timeLeft, setTimeLeft] = useState(_props.minutes * 60);
     const [rotateIcon, setRotateIcon] = useState(false)

     useEffect(() => {
          if (timeLeft <= 0) {
               _props.setOnTimeEnd(true);
               return;
          }
          const timerInterval = setInterval(() => {
               setTimeLeft(prevTime => prevTime - 1);
               setRotateIcon(prev => !prev)
          }, 1000);
          return () => clearInterval(timerInterval);
     }, [timeLeft, _props.setOnTimeEnd, _props]);

     const formatTime = (seconds) => {
          const m = Math.floor(seconds / 60);
          const s = seconds % 60;
          return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
     };

     return (
          <div className="border-2 border-zinc-600 px-3 py-1 rounded flex gap-2 items-center justify-center font-semibold w-28">
               <span className={`transition-all ${rotateIcon ? "rotate-180" : ""}`}><GiSandsOfTime /></span> {formatTime(timeLeft)}
          </div>
     );
}

export default Timer;
