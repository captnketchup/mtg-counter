import { create } from "zustand";

interface PlayerState {
  id: number;
  health: number;
  increment: () => void;
  decrement: () => void;
}

interface GameState {
  players: PlayerState[];

  addPlayer: (player: PlayerState) => void;
  deletePlayer: (player: PlayerState) => void;
}

export const useGameState = create<GameState>((set) => ({
  players: [],
  addPlayer: (player) => set((state) => ({ players: [...state.players, player] })),
  deletePlayer: (player) =>
    set((state) => ({
      players: state.players.filter((element) => element.id !== player.id),
    })),
}));
