<template>
  <v-card class="gallery-card" hover elevation="4">
    <!-- Header com tipo -->
    <div class="card-header" :class="headerClass">
      <v-icon :color="iconColor" size="24">
        {{ item.tipo === 'filme' ? 'mdi-movie' : 'mdi-gamepad-variant' }}
      </v-icon>
      <v-chip :color="chipColor" size="small" class="ml-auto">
        {{ item.tipo === 'filme' ? 'Filme' : 'Jogo' }}
      </v-chip>
    </div>

    <!-- Conteúdo principal -->
    <v-card-text class="pa-4">
      <h3 class="text-h6 font-weight-bold mb-2 text-truncate" :title="item.titulo">
        {{ item.titulo }}
      </h3>
      
      <div class="mb-3">
        <v-chip size="small" color="primary" variant="outlined" class="mr-1">
          {{ item.genero }}
        </v-chip>
        <v-chip size="small" color="info" variant="text">
          {{ item.ano }}
        </v-chip>
      </div>

      <div class="d-flex align-center justify-space-between">
        <v-rating 
          :model-value="item.nota" 
          readonly 
          density="compact" 
          size="small"
          color="amber"
          class="rating-stars"></v-rating>
        
        <v-chip :color="notaColor" size="small" variant="elevated">
          {{ item.nota }}/5
        </v-chip>
      </div>
    </v-card-text>

    <!-- Footer com ações mínimas -->
    <v-card-actions class="pa-4 pt-0">
      <v-btn 
        variant="text" 
        size="small" 
        color="primary" 
        :to="{ name: 'Biblioteca' }"
        prepend-icon="mdi-pencil">
        Editar
      </v-btn>
      <v-spacer />
      <v-tooltip text="Gerenciar este item">
        <template v-slot:activator="{ props }">
          <v-btn 
            v-bind="props"
            icon="mdi-open-in-app" 
            variant="text" 
            size="small"
            color="grey"
            :to="{ name: 'Biblioteca' }">
          </v-btn>
        </template>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'GalleryCard',
  props: { 
    item: { 
      type: Object, 
      required: true 
    } 
  },
  setup(props) {
    const headerClass = computed(() => 
      props.item.tipo === 'filme' ? 'header-filme' : 'header-jogo'
    )

    const iconColor = computed(() => 
      props.item.tipo === 'filme' ? 'red-darken-1' : 'blue-darken-1'
    )

    const chipColor = computed(() => 
      props.item.tipo === 'filme' ? 'red' : 'blue'
    )

    const notaColor = computed(() => {
      if (props.item.nota >= 4) return 'success'
      if (props.item.nota >= 3) return 'warning'
      return 'error'
    })

    return {
      headerClass,
      iconColor,
      chipColor,
      notaColor
    }
  }
}
</script>

<style scoped>
.gallery-card {
  transition: all 0.3s ease !important;
  border-radius: 12px !important;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gallery-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 40px rgba(46, 125, 50, 0.3) !important;
}

.card-header {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  min-height: 50px;
}

.header-filme {
  background: linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(198, 40, 40, 0.1) 100%);
  border-bottom: 1px solid rgba(244, 67, 54, 0.2);
}

.header-jogo {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(25, 118, 210, 0.1) 100%);
  border-bottom: 1px solid rgba(33, 150, 243, 0.2);
}

.rating-stars {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.v-card-text {
  flex: 1;
}

.v-card-actions {
  margin-top: auto;
}

/* Ajustes responsivos */
@media (max-width: 600px) {
  .card-header {
    padding: 8px 12px;
    min-height: 40px;
  }
  
  .v-card-text {
    padding: 12px !important;
  }
  
  .v-card-actions {
    padding: 12px !important;
    padding-top: 0 !important;
  }
}
</style>