<template>
  <div>
    <h1>Gerenciar Biblioteca</h1>

    <v-row>
      <v-col cols="12" md="4">
        <item-form :item="formData" @save="onFormSave" @reset="resetForm" />
      </v-col>

      <v-col cols="12" md="8">
        <v-card class="lista-card">
          <v-card-title>Lista</v-card-title>
          <v-card-text>
            <v-text-field label="Buscar por título" v-model="search" />
            <v-select :items="['todos', 'jogo', 'filme']" label="Filtrar tipo" v-model="filterTipo" />
            <v-select :items="['todos',1,2,3,4,5]" label="Filtrar nota mínima" v-model.number="filterNota" />

            <v-row>
              <v-col cols="12" sm="6" v-for="item in filtered" :key="item.id">
                <item-card :item="item" @edit="edit" @delete="remove" />
              </v-col>
            </v-row>
            <div v-if="!filtered.length">Nenhum item encontrado.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useBibliotecaStore } from '../stores/biblioteca'
import ItemForm from '../components/ItemForm.vue'
import ItemCard from '../components/ItemCard.vue'

export default {
  components: { ItemForm, ItemCard },
  setup () {
    const store = useBibliotecaStore()
    onMounted(() => store.load())

    const formData = ref({ titulo: '', genero: '', tipo: 'jogo', ano: new Date().getFullYear(), nota: 3, id: null })

    const search = ref('')
    const filterTipo = ref('todos')
    const filterNota = ref('todos')

    const resetForm = () => {
      formData.value = { titulo: '', genero: '', tipo: 'jogo', ano: new Date().getFullYear(), nota: 3, id: null }
    }

    const onFormSave = (payload) => {
      if (payload.id) store.updateItem(payload)
      else store.addItem(payload)
      resetForm()
    }

    const edit = (item) => {
      formData.value = { ...item }
    }

    const remove = (id) => {
      if (confirm('Confirma exclusão?')) store.removeItem(id)
    }

    const filtered = computed(() => {
      return store.items.filter(i => {
        if (search.value && !i.titulo.toLowerCase().includes(search.value.toLowerCase())) return false
        if (filterTipo.value !== 'todos' && i.tipo !== filterTipo.value) return false
        if (filterNota.value !== 'todos' && Number(i.nota) < Number(filterNota.value)) return false
        return true
      })
    })

    return { formData, onFormSave, resetForm, edit, remove, search, filterTipo, filterNota, filtered }
  }
}
</script>

<style scoped>
.lista-card {
  background: #1e1e1e !important;
  border: 1px solid rgba(46, 125, 50, 0.3) !important;
}
</style>
