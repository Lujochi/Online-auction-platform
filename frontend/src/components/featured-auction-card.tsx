"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Auction = {
  id: string;
  title: string;
  imageUrl: string;
  currentBid: number;
  endsAt: string;
};

function parseEndsAtToTimestamp(endsAt: string): number {
  const [h, m, s] = endsAt.split(":").map(Number);
  const now = new Date();
  return now.getTime() + (h * 3600 + m * 60 + s) * 1000;
}

function getTimeRemaining(endTimestamp: number): string {
  const total = endTimestamp - new Date().getTime();
  if (total <= 0) return "Encerrado";

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(total / 1000 / 60 / 60);

  if (hours > 0) return `${hours}h ${minutes}min ${seconds}s`;
  if (minutes > 0) return `${minutes}min ${seconds}s`;
  return `${seconds}s`;
}

const mockAuctions: Auction[] = [
  {
    id: "1",
    title: 'Quadro de arte "A Rosa"',
    imageUrl: "/images/rosa.png",
    currentBid: 560,
    endsAt: "00:30:00",
  },
];

export const FeaturedAuctionCard = () => {
  const [endTimes, setEndTimes] = useState<{ [id: string]: number }>({});
  const [timeLeft, setTimeLeft] = useState<{ [id: string]: string }>({});

  useEffect(() => {
    const ends = Object.fromEntries(
      mockAuctions.map((auction) => [
        auction.id,
        parseEndsAtToTimestamp(auction.endsAt),
      ])
    );
    setEndTimes(ends);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const updated: { [id: string]: string } = {};
      for (const id in endTimes) {
        updated[id] = getTimeRemaining(endTimes[id]);
      }
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTimes]);

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-12 w-fit mx-auto">
      {mockAuctions.map((auction) => (
        <div
          key={auction.id}
          className="w-[400px] bg-secundary-200 rounded-[10px] overflow-hidden"
        >
          <Image
            src={auction.imageUrl}
            alt={auction.title}
            width={300}
            height={400}
            className="w-full h-[250px] border-8 border-primary-800"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold">{auction.title}</h3>
            <p className="text-gray-600">
              Lance atual: R$ {auction.currentBid ?? "Carregando..."}
            </p>
            <p className="text-sm text-red-600 font-medium">
              Termina em: {timeLeft[auction.id] ?? "Carregando..."}
            </p>
            <button className="mt-4 w-full bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 cursor-pointer">
              Ver Leilão
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
