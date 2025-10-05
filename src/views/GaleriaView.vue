<template>
  <div>
    <h1>Galeria</h1>
    <p class="text-subtitle-1 mb-6">Visualize sua coleção de jogos e filmes</p>
    
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-select 
          :items="genders" 
          label="Filtrar por gênero" 
          v-model="filterGenero"
          prepend-inner-icon="mdi-tag"
          clearable />
      </v-col>
      <v-col cols="12" md="6">
        <v-select 
          :items="tipoOptions" 
          label="Filtrar por tipo" 
          v-model="filterTipo"
          prepend-inner-icon="mdi-filter"
          clearable />
      </v-col>
    </v-row>

    <!-- Contador de itens -->
    <v-card class="mb-4" variant="outlined">
      <v-card-text class="d-flex align-center">
        <v-icon class="mr-2" color="primary">mdi-view-grid</v-icon>
        <span class="text-h6">{{ filtered.length }} {{ filtered.length === 1 ? 'item encontrado' : 'itens encontrados' }}</span>
        <v-spacer />
        <v-chip color="primary" size="small">{{ store.totalItems }} total</v-chip>
      </v-card-text>
    </v-card>

    <v-row v-if="filtered.length">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="item in filtered" :key="item.id">
        <gallery-card :item="item" />
      </v-col>
    </v-row>

    <!-- Estado vazio -->
    <v-card v-else class="text-center pa-8">
      <v-icon size="64" color="grey">mdi-image-off</v-icon>
      <h3 class="mt-4 mb-2">Nenhum item encontrado</h3>
      <p class="text-grey">Tente ajustar os filtros ou adicione novos itens à biblioteca</p>
      <v-btn color="primary" :to="{ name: 'Biblioteca' }" class="mt-4">
        <v-icon left>mdi-plus</v-icon>
        Adicionar Itens
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useBibliotecaStore } from '../stores/biblioteca'
import GalleryCard from '../components/GalleryCard.vue'

export default {
  components: { GalleryCard },
  setup () {
    const store = useBibliotecaStore()
    onMounted(() => store.load())
    
    const filterGenero = ref(null)
    const filterTipo = ref(null)

    const genders = computed(() => {
      const set = new Set(store.items.map(i => i.genero).filter(Boolean))
      return Array.from(set).sort()
    })

    const tipoOptions = computed(() => [
      { title: '🎮 Jogos', value: 'jogo' },
      { title: '🎬 Filmes', value: 'filme' }
    ])

    const filtered = computed(() => {
      return store.items.filter(i => {
        if (filterGenero.value && i.genero !== filterGenero.value) return false
        if (filterTipo.value && i.tipo !== filterTipo.value) return false
        return true
      }).sort((a, b) => {

        if (b.nota !== a.nota) return b.nota - a.nota
        return a.titulo.localeCompare(b.titulo)
      })
    })

    return { 
      store,
      filterGenero, 
      filterTipo, 
      genders, 
      tipoOptions,
      filtered 
    }
  }
}
</script>
