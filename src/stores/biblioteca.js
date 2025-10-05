import { defineStore } from 'pinia'

const STORAGE_KEY = 'biblioteca_items_v1'

export const useBibliotecaStore = defineStore('biblioteca', {
  state: () => ({
    items: []
  }),
  actions: {
    load () {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        this.items = JSON.parse(raw)
      } else {

        this.initializeWithSampleData()
      }
    },
    initializeWithSampleData () {
      this.items = [

        { id: '1', titulo: 'Vingadores: Ultimato', genero: 'Ação', tipo: 'filme', ano: 2019, nota: 5 },
        { id: '2', titulo: 'Interestelar', genero: 'Ficção Científica', tipo: 'filme', ano: 2014, nota: 5 },
        { id: '3', titulo: 'Parasita', genero: 'Drama', tipo: 'filme', ano: 2019, nota: 4 },
        { id: '4', titulo: 'Coringa', genero: 'Drama', tipo: 'filme', ano: 2019, nota: 4 },
        { id: '5', titulo: 'Duna', genero: 'Ficção Científica', tipo: 'filme', ano: 2021, nota: 4 },
        { id: '6', titulo: 'Top Gun: Maverick', genero: 'Ação', tipo: 'filme', ano: 2022, nota: 4 },
        { id: '7', titulo: 'Tudo em Todo Lugar ao Mesmo Tempo', genero: 'Comédia', tipo: 'filme', ano: 2022, nota: 5 },
        { id: '8', titulo: 'John Wick 4', genero: 'Ação', tipo: 'filme', ano: 2023, nota: 4 },
        

        { id: '9', titulo: 'The Legend of Zelda: Breath of the Wild', genero: 'Aventura', tipo: 'jogo', ano: 2017, nota: 5 },
        { id: '10', titulo: 'God of War', genero: 'Ação', tipo: 'jogo', ano: 2018, nota: 5 },
        { id: '11', titulo: 'Red Dead Redemption 2', genero: 'Aventura', tipo: 'jogo', ano: 2018, nota: 5 },
        { id: '12', titulo: 'Cyberpunk 2077', genero: 'RPG', tipo: 'jogo', ano: 2020, nota: 3 },
        { id: '13', titulo: 'Elden Ring', genero: 'RPG', tipo: 'jogo', ano: 2022, nota: 5 },
        { id: '14', titulo: 'Spider-Man: Miles Morales', genero: 'Ação', tipo: 'jogo', ano: 2020, nota: 4 },
        { id: '15', titulo: 'Hades', genero: 'Roguelike', tipo: 'jogo', ano: 2020, nota: 4 },
        { id: '16', titulo: 'Minecraft', genero: 'Sandbox', tipo: 'jogo', ano: 2011, nota: 5 },
        { id: '17', titulo: 'Among Us', genero: 'Party', tipo: 'jogo', ano: 2018, nota: 3 },
        { id: '18', titulo: 'Valorant', genero: 'FPS', tipo: 'jogo', ano: 2020, nota: 4 }
      ]
      this.persist()
    },
    persist () {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items))
    },
    addItem (item) {
      item.id = Date.now().toString()
      this.items.push(item)
      this.persist()
    },
    updateItem (updated) {
      const idx = this.items.findIndex(i => i.id === updated.id)
      if (idx !== -1) {
        this.items.splice(idx, 1, updated)
        this.persist()
      }
    },
    removeItem (id) {
      this.items = this.items.filter(i => i.id !== id)
      this.persist()
    }
  },
  getters: {
    totalItems: (state) => state.items.length,
    totalFilmes: (state) => state.items.filter(i => i.tipo === 'filme').length,
    totalJogos: (state) => state.items.filter(i => i.tipo === 'jogo').length,
    mediaNotas: (state) => {
      if (state.items.length === 0) return 0
      const soma = state.items.reduce((acc, item) => acc + Number(item.nota), 0)
      return (soma / state.items.length).toFixed(1)
    },
    generos: (state) => {
      const generosSet = new Set(state.items.map(i => i.genero))
      return Array.from(generosSet).sort()
    },
    estatisticasPorGenero: (state) => {
      const stats = {}
      state.items.forEach(item => {
        if (!stats[item.genero]) {
          stats[item.genero] = { count: 0, notas: [] }
        }
        stats[item.genero].count++
        stats[item.genero].notas.push(Number(item.nota))
      })
      
      Object.keys(stats).forEach(genero => {
        const notas = stats[genero].notas
        stats[genero].media = (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(1)
      })
      
      return stats
    }
  }
})
