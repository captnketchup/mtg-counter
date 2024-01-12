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

const iconStore = {
  black: <FaSkull />,
  white: <FaSun />,
  blue: <FaDroplet />,
  red: <FaFire />,
  green: <FaTree />,
} satisfies { [key in CounterType]: ReactElement };

function CounterIcon({ type }: CounterIconProps) {
  return iconStore[type];
}
