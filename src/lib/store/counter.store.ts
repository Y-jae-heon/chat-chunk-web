import { create } from 'zustand'
import zustandToSvelte from './zustandToSvelte'

export interface ICounterStore {
  value: number
  increment: () => void
}

const counterStore = create<ICounterStore>(set => ({
  value: 0,
  increment: () => set(state => ({ value: state.value + 1 }))
}))

export default zustandToSvelte(counterStore)
