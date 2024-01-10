import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import clsx from "clsx";

interface GridElementProps {
  count: number;
  orientation?: "up" | "down";
}

export function GridElement({ count, orientation = "up" }: GridElementProps) {
  const [health, setHealth] = useState<number>(count);
  return (
    <div className={clsx("grid grid-rows-3", orientation == "down" && "rotate-180")}>
      <div className="bg-red-300" onClick={() => setHealth(health + 1)}></div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-7xl">{health}</h1>
        <FaHeart className="text-2xl" />
      </div>
      <div className="bg-red-300" onClick={() => setHealth(health - 1)}></div>
    </div>
  );
}
