export type CounterType =
  | "black"
  | "white"
  | "green"
  | "blue"
  | "red"
  | "shock"
  | "phyrexian"
  | "star"
  | "cloud"
  | "shield"
  | "sword"
  | "mana";

export interface MagicCounter {
  counterId: number;
  type: CounterType;
  value: number;
}