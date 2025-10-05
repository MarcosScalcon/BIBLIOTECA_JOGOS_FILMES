<template>
  <v-card>
    <v-card-title>{{ item.titulo }}</v-card-title>
    <v-card-subtitle>{{ item.tipo }} • {{ item.genero }}</v-card-subtitle>
    <v-card-text>Ano: {{ item.ano }} • Nota: {{ item.nota }}</v-card-text>
    <v-card-actions>
      <v-btn text @click="$emit('edit', item)">Editar</v-btn>
      <v-btn text color="error" @click="$emit('delete', item.id)">Excluir</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ItemCard',
  props: { item: { type: Object, required: true } }
}
</script>
