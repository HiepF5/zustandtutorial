import { create } from 'zustand'

const useStore =  create((set) => ({
  count: 0,
  increment: (value) => set((state) => ({ count: state.count + value })),
  decrement: (value) => set((state) => ({ count: state.count - value })),
  data:{},
  fetch: async (url) => {
    const response = await fetch(url)
    set({ data: await response.json() })
  },
}))
export default useStore
