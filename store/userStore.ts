import { create } from "zustand";
import { User } from "../interfaces/userInterface";

interface UserState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
