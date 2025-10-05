<template>
  <v-card class="form-card" elevation="8">
    <v-card-title class="d-flex align-center pa-6 form-title">
      <v-icon class="mr-3" :color="item.id ? 'warning' : 'success'" size="28">
        {{ item.id ? 'mdi-pencil' : 'mdi-plus-circle' }}
      </v-icon>
      {{ item.id ? 'Editar Item' : 'Adicionar Novo Item' }}
    </v-card-title>
    
    <v-card-text class="pa-6">
      <v-form class="form-container">
        <v-text-field 
          label="Título *" 
          v-model="local.titulo"
          prepend-inner-icon="mdi-format-title"
          :rules="[v => !!v || 'Título é obrigatório']"
          class="mb-4" />
          
        <v-select 
          :items="generoItems" 
          label="Gênero *" 
          v-model="local.genero"
          prepend-inner-icon="mdi-tag"
          :rules="[v => !!v || 'Gênero é obrigatório']"
          class="mb-4" />
          
        <v-select 
          :items="tipoItems" 
          label="Tipo *" 
          v-model="local.tipo"
          prepend-inner-icon="mdi-format-list-bulleted-type"
          class="mb-4" />
          
        <v-text-field 
          label="Ano" 
          type="number" 
          v-model.number="local.ano"
          min="1900"
          :max="new Date().getFullYear() + 5"
          prepend-inner-icon="mdi-calendar"
          class="mb-4" />
          
        <div class="mb-4">
          <v-label class="text-subtitle-2 mb-2 d-block">Avaliação</v-label>
          <div class="d-flex align-center">
            <v-rating 
              v-model="local.nota"
              color="amber"
              active-color="amber"
              hover
              size="large"
              class="mr-4"></v-rating>
            <v-chip :color="notaColor" size="small">
              {{ local.nota }}/5
            </v-chip>
          </div>
        </div>
      </v-form>
    </v-card-text>
    
    <v-card-actions class="pa-6 pt-0">
      <v-btn 
        :color="item.id ? 'warning' : 'success'" 
        variant="elevated"
        size="large"
        :prepend-icon="item.id ? 'mdi-content-save' : 'mdi-plus'"
        @click="onSave"
        class="mr-2">
        {{ item.id ? 'Atualizar' : 'Adicionar' }}
      </v-btn>
      
      <v-btn 
        variant="outlined" 
        color="grey"
        size="large"
        prepend-icon="mdi-refresh"
        @click="onReset">
        Limpar
      </v-btn>
      
      <v-spacer />
      
      <v-btn 
        v-if="item.id"
        variant="text" 
        color="error"
        prepend-icon="mdi-cancel"
        @click="onReset">
        Cancelar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { reactive, toRefs, watch, computed } from 'vue'

export default {
  name: 'ItemForm',
  props: {
    item: { type: Object, default: () => ({ titulo: '', genero: '', tipo: 'jogo', ano: new Date().getFullYear(), nota: 3 }) }
  },
  emits: ['save','reset'],
  setup (props, { emit }) {
    const local = reactive({ ...props.item })
    
    watch(() => props.item, (v) => {
      Object.assign(local, v || {})
    })

    const tipoItems = [
      { title: '🎮 Jogo', value: 'jogo' },
      { title: '🎬 Filme', value: 'filme' }
    ]

    const generoItems = [

      'Ação',
      'Aventura', 
      'RPG',
      'Estratégia',
      'Simulação',
      'Esportes',
      'Corrida',
      'Puzzle',
      'Plataforma',
      'Luta',
      'Tiro',
      'Horror',
      'Survival',
      'Sandbox',
      'MMORPG',
      'Battle Royale',

      'Drama',
      'Comédia',
      'Romance',
      'Thriller',
      'Suspense',
      'Terror',
      'Ficção Científica',
      'Fantasia',
      'Animação',
      'Documentário',
      'Musical',
      'Guerra',
      'Western',
      'Crime',
      'Biografia',
      'Família',
      'Mistério',
      'Super-herói'
    ]
    
    const notaColor = computed(() => {
      if (local.nota >= 4) return 'success'
      if (local.nota >= 3) return 'warning'
      return 'error'
    })

    const onSave = () => {
      if (!local.titulo || !local.genero) {
        return
      }
      emit('save', { ...local })
    }
    
    const onReset = () => emit('reset')

    return { 
      ...toRefs(local), 
      local, 
      onSave, 
      onReset,
      tipoItems,
      generoItems,
      notaColor
    }
  }
}
</script>

<style scoped>
.form-card {
  background: linear-gradient(145deg, #2d2d2d 0%, #1e1e1e 100%) !important;
  border: 1px solid rgba(46, 125, 50, 0.3) !important;
  transition: all 0.3s ease;
}

.form-card:hover {
  border-color: rgba(46, 125, 50, 0.5) !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(46, 125, 50, 0.2) !important;
}

.form-title {
  background: linear-gradient(90deg, rgba(46, 125, 50, 0.1) 0%, rgba(102, 187, 106, 0.05) 100%);
  border-bottom: 1px solid rgba(46, 125, 50, 0.2);
  font-weight: 600;
}

.form-container {
  position: relative;
}

.v-text-field, .v-select {
  margin-bottom: 8px;
}

.v-btn {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
}

.v-rating {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}
</style>
