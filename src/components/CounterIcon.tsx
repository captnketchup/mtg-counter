import { FaBeer } from "react-icons/fa";
import { CounterType } from "../models/Counter";
import {
  FaDroplet,
  FaFire,
  FaSkull,
  FaSun,
  FaTree,
  FaUssunnah,
} from "react-icons/fa6";
import { ReactElement } from "react";

interface CounterIconProps {
  type: CounterType;
}

const iconStore = [
  {
    key: "black",
    icon: <FaSkull />,
  },
  {
    key: "white",
    icon: <FaSun />,
  },
  {
    key: "blue",
    icon: <FaDroplet />,
  },
  {
    key: "red",
    icon: <FaFire />,
  },
  {
    key: "green",
    icon: <FaTree />,
  },
] as { key: CounterType; icon: ReactElement }[];

function CounterIcon({ type }: CounterIconProps) {
  return iconStore.find((icon) => icon.key === type) ?? <FaUssunnah />;
}
