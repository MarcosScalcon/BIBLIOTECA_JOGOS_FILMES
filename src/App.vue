<template>
  <v-app>
    <v-app-bar app color="primary" class="custom-app-bar" elevation="8">
      <template v-slot:prepend>
        <v-icon size="x-large" color="white">mdi-bookmark-multiple</v-icon>
      </template>
      
      <v-app-bar-title class="text-h5 font-weight-bold">
        <span class="text-gradient">Biblioteca</span> Jogos/Filmes
      </v-app-bar-title>
      
      <v-spacer />
      
      <div class="d-flex ga-2">
        <v-btn 
          :to="{ name: 'Home' }" 
          :variant="isActive('Home') ? 'tonal' : 'text'"
          :class="{ 'active-nav': isActive('Home') }"
          class="nav-btn"
          prepend-icon="mdi-view-dashboard">
          <span class="d-none d-sm-inline">Início</span>
        </v-btn>
        
        <v-btn 
          :to="{ name: 'Biblioteca' }" 
          :variant="isActive('Biblioteca') ? 'tonal' : 'text'"
          :class="{ 'active-nav': isActive('Biblioteca') }"
          class="nav-btn"
          prepend-icon="mdi-cog">
          <span class="d-none d-sm-inline">Gerenciar</span>
        </v-btn>
        
        <v-btn 
          :to="{ name: 'Galeria' }" 
          :variant="isActive('Galeria') ? 'tonal' : 'text'"
          :class="{ 'active-nav': isActive('Galeria') }"
          class="nav-btn"
          prepend-icon="mdi-view-grid">
          <span class="d-none d-sm-inline">Galeria</span>
        </v-btn>
        
        <v-btn 
          :to="{ name: 'Sobre' }" 
          :variant="isActive('Sobre') ? 'tonal' : 'text'"
          :class="{ 'active-nav': isActive('Sobre') }"
          class="nav-btn"
          prepend-icon="mdi-information">
          <span class="d-none d-sm-inline">Sobre</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main class="custom-main">
      <v-container class="pa-6" fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>

    <v-footer class="copyright-footer" app>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <div class="d-flex align-center">
              <v-icon class="mr-2" size="small" color="primary">mdi-copyright</v-icon>
              <span class="copyright-text">
                {{ new Date().getFullYear() }} Biblioteca Jogos/Filmes. Todos os direitos reservados.
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  setup () {
    const route = useRoute()
    const isActive = (name) => {
      return computed(() => route.name === name).value
    }

    return { isActive }
  }
}
</script>

<style scoped>
.custom-app-bar {
  backdrop-filter: blur(10px);
}

.text-gradient {
  background: linear-gradient(45deg, #66BB6A, #A5D6A7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-btn {
  margin: 0 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px !important;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.15) !important;
  transform: translateY(-2px);
}

.nav-btn.active-nav {
  background-color: rgba(255, 255, 255, 0.25) !important;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.custom-main {
  position: relative;
  overflow-x: hidden;
}

.custom-main::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(46, 125, 50, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(102, 187, 106, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #121212 0%, #1E1E1E 100%);
  z-index: -1;
  pointer-events: none;
}

/* Animações de transição */
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Rodapé de copyright */
.copyright-footer {
  background: linear-gradient(90deg, #1B5E20 0%, #2E7D32 100%) !important;
  border-top: 1px solid rgba(46, 125, 50, 0.3);
  backdrop-filter: blur(10px);
  min-height: 60px !important;
}

.copyright-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.25px;
}

/* Layout responsivo mobile */
@media (max-width: 600px) {
  .nav-btn {
    min-width: 48px !important;
    padding: 0 8px !important;
  }
  
  .v-app-bar-title {
    font-size: 1.1rem !important;
  }
  
  .copyright-text {
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
