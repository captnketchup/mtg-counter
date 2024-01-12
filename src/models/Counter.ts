export type CounterType =
  | "black"
  | "white"
  | "green"
  | "blue"
  | "red";

export interface MagicCounter {
  counterId: number;
  type: CounterType;
  value: number;
}