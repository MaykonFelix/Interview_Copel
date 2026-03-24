import { create } from 'zustand'

type TesteState = { teste: number }

type TesteStoreActions = {
  increasePopulation: () => void
  removeAlltestes: () => void
  updateTeste: (item: number) => void
}

type TesteStore = TesteState & TesteStoreActions

export const useTeste = create<TesteStore>(set => ({
  teste: 0,
  increasePopulation: () => set(state => ({ teste: state.teste + 1 })),
  removeAlltestes: () => set({ teste: 0 }),
  updateTeste: newState => set({ teste: newState })
}))
