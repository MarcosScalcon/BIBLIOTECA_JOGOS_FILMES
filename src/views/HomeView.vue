<template>
  <div>
    <h1>Dashboard - Biblioteca de Jogos e Filmes</h1>
    <p>Bem-vindos à Biblioteca de Jogos/Filmes. Gerencie sua coleção pessoal!</p>
    
    <!-- Informações do projeto -->
    <v-alert 
      type="info" 
      variant="tonal" 
      class="mb-6"
      prepend-icon="mdi-information">
      <div class="d-flex flex-column flex-sm-row align-center">
        <div class="flex-grow-1">
          <strong>Sistema feito com Vue 3 + Vuetify 3</strong> • 
          Usando Pinia pra gerenciar estado • 
          Vue Router para as rotas
        </div>
        <v-chip-group class="mt-2 mt-sm-0">
          <v-chip size="small" color="success">Vue 3</v-chip>
          <v-chip size="small" color="info">Vuetify 3</v-chip>
          <v-chip size="small" color="warning">Pinia</v-chip>
        </v-chip-group>
      </div>
    </v-alert>
    
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card stat-card-primary" hover>
          <v-card-text class="text-center pa-6">
            <v-icon size="48" color="white" class="mb-3">mdi-bookmark-multiple</v-icon>
            <div class="text-h2 text-white font-weight-bold">{{ store.totalItems }}</div>
            <div class="text-white text-subtitle-1">Total de Itens</div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card stat-card-success" hover>
          <v-card-text class="text-center pa-6">
            <v-icon size="48" color="white" class="mb-3">mdi-movie</v-icon>
            <div class="text-h2 text-white font-weight-bold">{{ store.totalFilmes }}</div>
            <div class="text-white text-subtitle-1">Filmes</div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card stat-card-info" hover>
          <v-card-text class="text-center pa-6">
            <v-icon size="48" color="white" class="mb-3">mdi-gamepad-variant</v-icon>
            <div class="text-h2 text-white font-weight-bold">{{ store.totalJogos }}</div>
            <div class="text-white text-subtitle-1">Jogos</div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card stat-card-warning" hover>
          <v-card-text class="text-center pa-6">
            <v-icon size="48" color="white" class="mb-3">mdi-star</v-icon>
            <div class="text-h2 text-white font-weight-bold">{{ store.mediaNotas }}</div>
            <div class="text-white text-subtitle-1">Média de Notas</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <v-card class="elevated-card">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-clock-outline</v-icon>
            Últimos Adicionados
          </v-card-title>
          <v-card-text>
            <div v-if="ultimosItens.length">
              <v-list bg-color="transparent">
                <v-list-item 
                  v-for="item in ultimosItens" 
                  :key="item.id"
                  class="mb-2"
                  rounded="lg">
                  <template v-slot:prepend>
                    <v-avatar :color="item.tipo === 'filme' ? 'red-darken-2' : 'blue-darken-2'" size="40">
                      <v-icon color="white">
                        {{ item.tipo === 'filme' ? 'mdi-movie' : 'mdi-gamepad-variant' }}
                      </v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="font-weight-medium">{{ item.titulo }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip size="x-small" color="primary" class="mr-1">{{ item.genero }}</v-chip>
                    {{ item.ano }} • 
                    <v-rating 
                      :model-value="item.nota" 
                      readonly 
                      density="compact" 
                      size="small"
                      color="amber"
                      class="d-inline-flex ml-1"></v-rating>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </div>
            <div v-else class="text-center pa-8">
              <v-icon size="64" color="grey">mdi-bookmark-outline</v-icon>
              <p class="text-h6 mt-4">Nenhum item cadastrado ainda</p>
              <v-btn color="primary" :to="{ name: 'Biblioteca' }">Adicionar primeiro item</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="4">
        <v-card class="elevated-card">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-chart-pie</v-icon>
            Estatísticas por Gênero
          </v-card-title>
          <v-card-text>
            <div v-for="(stats, genero) in store.estatisticasPorGenero" :key="genero" class="mb-3">
              <v-card variant="outlined" class="genre-stat-card">
                <v-card-text class="pa-3">
                  <div class="d-flex justify-space-between align-center">
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-primary">{{ genero }}</div>
                      <div class="text-caption">{{ stats.count }} {{ stats.count === 1 ? 'item' : 'itens' }}</div>
                    </div>
                    <div class="text-right">
                      <div class="text-h6 text-warning">{{ stats.media }}/5</div>
                      <v-rating 
                        :model-value="Number(stats.media)" 
                        readonly 
                        density="compact" 
                        size="x-small"
                        color="amber"></v-rating>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useBibliotecaStore } from '../stores/biblioteca'
import { computed, onMounted } from 'vue'

export default {
  setup () {
    const store = useBibliotecaStore()
    onMounted(() => store.load())
    
    const ultimosItens = computed(() => {
      return store.items
        .slice(-5)
        .reverse()
    })
    
    return { 
      store,
      ultimosItens
    }
  }
}
</script>

<style scoped>
.stat-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none !important;
  overflow: hidden;
  position: relative;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background: radial-gradient(circle at center, white 0%, transparent 70%);
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 0.2;
}

.stat-card-primary {
  background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%) !important;
  box-shadow: 0 8px 32px rgba(46, 125, 50, 0.3) !important;
}

.stat-card-success {
  background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%) !important;
  box-shadow: 0 8px 32px rgba(76, 175, 80, 0.3) !important;
}

.stat-card-info {
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%) !important;
  box-shadow: 0 8px 32px rgba(33, 150, 243, 0.3) !important;
}

.stat-card-warning {
  background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%) !important;
  box-shadow: 0 8px 32px rgba(255, 152, 0, 0.3) !important;
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4) !important;
}

.v-card.elevated-card {
  box-shadow: 0 12px 40px rgba(46, 125, 50, 0.15) !important;
  border: none !important;
}

.v-card.elevated-card:hover {
  box-shadow: 0 20px 60px rgba(46, 125, 50, 0.25) !important;
}

.genre-stat-card {
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(102, 187, 106, 0.05) 100%) !important;
  border: 1px solid rgba(46, 125, 50, 0.3) !important;
  transition: all 0.3s ease;
}

.genre-stat-card:hover {
  background: linear-gradient(135deg, rgba(46, 125, 50, 0.2) 0%, rgba(102, 187, 106, 0.1) 100%) !important;
  transform: translateY(-2px);
}
</style>
