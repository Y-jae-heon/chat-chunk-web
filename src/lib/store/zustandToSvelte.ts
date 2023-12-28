import { readable } from 'svelte/store'

export default function zustandToSvelte(zustandStore: any) {
  return readable(zustandStore.getState(), set => {
    zustandStore.subscribe((value: any) => set(value))

    return () => zustandStore.destroy()
  })
}
