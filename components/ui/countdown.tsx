"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import LogoImage from "@/public/images/logo.png";
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<TimeLeft until={ny24} />);
const Counter = ({ count, label }: { count: number; label: string }) => (
  <div className="Counter flex flex-col items-center select-none cursor-progress">
    <p className="count font-bold text-4xl md:text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-pink-600">{count}</p>
    <p className="label text-sm lg:text-3xl text-secondary">{label}</p>
  </div>
);
const CountDown = () => {
  const [loading, setLoading] = useState(true);
  const until = new Date("2023-09-18");
  const [today, setToday] = useState(Date.now());
  const [msecsLeft, setMsecsLeft] = useState(0);
  const secs = Math.floor(msecsLeft / 1000) % 60;
  const mins = Math.floor(msecsLeft / (60 * 1000)) % 60;
  const hours = Math.floor(msecsLeft / (60 * 60 * 1000)) % 24;
  const days = Math.floor(msecsLeft / (24 * 60 * 60 * 1000));

  useEffect(() => {
    setToday(Date.now());
    setMsecsLeft(until.getTime() - today);
    if (today) {
      setLoading(false);
    }
    const timer = setInterval(() => {
      setMsecsLeft((prev) => prev - 1000);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  if (loading) {
    return (
      <section className="container fixed z-10 grid place-items-center h-screen w-screen min-h-screen min-w-screen bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <PulseLoader size={40} color="#233E81" />
        </div>
      </section>
    );
  }
  return (
    <section className="container fixed z-10 grid grid-rows-[1fr_50%_1fr] justify-center h-screen w-screen min-h-screen min-w-screen bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center justify-around text-secondary">
        <Image src={LogoImage} width={200} height={200} alt="Logo" className="h-[120px] w-[120px] md:h-[200px] md:w-[200px] object-contain" />
        <p className=" text-4xl md:text-6xl font-extrabold">Coming Soon!</p>
      </div>
      <div className="TimeLeft relative flex gap-5 md:gap-12 items-center justify-around self-center select-none -top-4">
        {days && (
          <Counter
            count={days}
            label="days"
          />
        )}
        {hours && (
          <Counter
            count={hours}
            label="hours"
          />
        )}
        {mins && (
          <Counter
            count={mins}
            label="minutes"
          />
        )}
        <Counter
          count={secs}
          label="seconds"
        />
      </div>
      <footer className="text-center text-xl font-bold text-info2">Ashoj 1, 2080</footer>
    </section>
  );
};
export default CountDown;
