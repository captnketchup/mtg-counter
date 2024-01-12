import { create } from "zustand";

type Player = {
  id: number;
  health: number;
  counters: MagicCounter[];
};

type CounterType =
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

interface MagicCounter {
  counterId: number;
  type: CounterType;
  value: number;
}

interface GameState {
  players: Player[];

  addPlayer: (player: Player) => void;
  deletePlayer: (player: Player) => void;
  editPlayer: (playerId: number, values: Partial<Player>) => void;
}

export const useGameState = create<GameState>((set) => ({
  players: [],
  addPlayer: (player) =>
    set((state) => ({ players: [...state.players, player] })),
  deletePlayer: (player) =>
    set((state) => ({
      players: state.players.filter((element) => element.id !== player.id),
    })),
  editPlayer: (id, values) =>
    set((state) => {
      const player = state.players.find((player) => player.id === id);
      if (!player) {
        return state;
      }
      const newPlayer: Player = {
        id: values.id ?? player.id,
        health: values.health ?? player.health,
        counters: values.counters ?? player.counters,
      };
      return {
        ...state,
        players: [
          ...state.players.filter((player) => player.id !== id),
          newPlayer,
        ],
      };
    }),
}));
