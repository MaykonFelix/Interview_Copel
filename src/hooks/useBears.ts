import { create } from 'zustand'

type BearState = { bears: number }

type BearStoreActions = {
  increasePopulation: () => void
  removeAllBears: () => void
  updateBears: (item: number) => void
}

type BearsStore = BearState & BearStoreActions

export const useBear = create<BearsStore>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: newBears => set({ bears: newBears })
}))
