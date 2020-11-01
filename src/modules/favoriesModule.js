import { reactive, toRefs } from 'vue'

export default function useFavories () {
  const state = reactive({
    items: []
  })

  const setInFavories = (product) => {
    state.items.unshift(JSON.stringify(product))
    localStorage.setItem('favories', state.items)
  }

  const updateFavories = () => {
    localStorage.setItem('favories', state.items)
  }
  return { ...toRefs(state), setInFavories, updateFavories }
}
