import { reactive, toRefs } from 'vue'

export default function useFavories () {
  const state = reactive({
    items: []
  })

  const setInFavories = (product) => {
    getFavories()
    if (state.items === [null]) {
      state.items.push(JSON.stringify(product))
    } else {
      state.items.unshift(JSON.stringify(product))
    }
    localStorage.setItem('favories', state.items)
  }

  const getFavories = () => {
    state.items = [localStorage.getItem('favories')]
    console.log(state.items)
  }

  const updateFavories = () => {
    localStorage.setItem('favories', state.items)
  }
  return { ...toRefs(state), setInFavories, updateFavories, getFavories }
}
