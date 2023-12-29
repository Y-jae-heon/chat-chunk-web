import { createStore, type StateCreator } from 'zustand/vanilla'
import zustandToSvelte from './zustandToSvelte'
import { createJSONStorage, persist, type PersistOptions } from 'zustand/middleware'

export interface ICounterStore {
  value: number
  increment: () => void
  decrease: () => void
  hasHydrated: boolean
}

type TPersist = (
  config: StateCreator<ICounterStore>,
  options: PersistOptions<ICounterStore>
) => StateCreator<ICounterStore>

const counterStore = createStore<ICounterStore>(
  (persist as TPersist)(
    set => ({
      value: 0,
      hasHydrated: true,
      increment: () => set(state => ({ value: state.value + 1 })),
      decrease: () => set(state => ({ value: state.value - 1 }))
    }),
    {
      name: 'counter-store',
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => () => {
        counterStore.setState({ hasHydrated: true })
      }
    }
  )
)

export default zustandToSvelte(counterStore)
