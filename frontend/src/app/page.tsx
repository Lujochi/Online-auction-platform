"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 2, 100);
      });
    }, 100);
  }, []);
  useEffect(() => {
    if (progress === 100) {
      window.location.href = "/login";
    }
  }, [progress]);

  return (
    <div className="w-screen h-screen bg-primary-800 flex flex-col text-white justify-center items-center">
      <Image
        className="mt-8"
        src="/logo-bid-fast-now.png"
        alt="Logo"
        width={482}
        height={276}
      />

      <div className="w-1/3 h-14 border-2 border-primary-400 mt-6 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500 ease-linear flex items-center justify-center rounded-full"
          style={{ width: `${progress}%` }}
        >
          <p className="text-center text-white">{progress}%</p>
        </div>
      </div>

      <p className="mt-6 text-2xl font-bold uppercase">Carregando...</p>
    </div>
  );
};

export default Loading;
