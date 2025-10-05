<template>
  <div>
    <h1>Sobre o Sistema</h1>
    <p class="text-subtitle-1 mb-6">Informações técnicas do projeto</p>
    
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-account-group</v-icon>
            Equipe de Desenvolvimento
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-list density="compact">
                  <v-list-item prepend-icon="mdi-account" color="primary">
                    <v-list-item-title>Marcos Vinicius Carvalho Scalcon</v-list-item-title>
                    <v-list-item-subtitle>Desenvolvedor Full Stack</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-account" color="primary">
                    <v-list-item-title>Natan de Almeida Benites</v-list-item-title>
                    <v-list-item-subtitle>Desenvolvedor Full Stack</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="6">
                <v-list density="compact">
                  <v-list-item prepend-icon="mdi-calendar" color="info">
                    <v-list-item-title>Outubro de 2025</v-list-item-title>
                    <v-list-item-subtitle>Data de desenvolvimento</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-school" color="success">
                    <v-list-item-title>Avaliação 1</v-list-item-title>
                    <v-list-item-subtitle>Frameworks Modernos para Desenvolvimento de Sistemas</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-code-tags</v-icon>
            Funcionalidades Implementadas
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <h4 class="text-success mb-3">Requisitos Obrigatórios</h4>
                <v-list density="compact">
                  <v-list-item prepend-icon="mdi-check-circle" color="success">
                    <v-list-item-title>Vue 3 + Vuetify 3 + Vue Router + Pinia</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-check-circle" color="success">
                    <v-list-item-title>3 páginas/rotas funcionais</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-check-circle" color="success">
                    <v-list-item-title>CRUD completo com localStorage</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-check-circle" color="success">
                    <v-list-item-title>Diretivas Vue (v-for, v-if, v-bind, v-on, v-model)</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-check-circle" color="success">
                    <v-list-item-title>Componentes reutilizáveis com props/emit</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              
              <v-col cols="12" md="6">
                <h4 class="text-info mb-3">Funcionalidades Extra</h4>
                <v-list density="compact">
                  <v-list-item prepend-icon="mdi-star" color="info">
                    <v-list-item-title>Sistema de avaliação com estrelas</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-filter" color="info">
                    <v-list-item-title>Filtros avançados (gênero, tipo, nota)</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-magnify" color="info">
                    <v-list-item-title>Busca por título</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-chart-line" color="info">
                    <v-list-item-title>Dashboard com estatísticas</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-responsive" color="info">
                    <v-list-item-title>Design responsivo</v-list-item-title>
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-palette" color="info">
                    <v-list-item-title>Tema customizado escuro/verde</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-cog</v-icon>
            Stack Tecnológico
          </v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip color="success" prepend-icon="mdi-vuejs">Vue 3</v-chip>
              <v-chip color="info" prepend-icon="mdi-material-design">Vuetify 3</v-chip>
              <v-chip color="warning" prepend-icon="mdi-router">Vue Router</v-chip>
              <v-chip color="error" prepend-icon="mdi-store">Pinia</v-chip>
              <v-chip color="primary" prepend-icon="mdi-lightning-bolt">Vite</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-navigation</v-icon>
            Navegação
          </v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item prepend-icon="mdi-view-dashboard">
                <v-list-item-title>Dashboard</v-list-item-title>
                <v-list-item-subtitle>Estatísticas e visão geral</v-list-item-subtitle>
              </v-list-item>
              <v-list-item prepend-icon="mdi-cog">
                <v-list-item-title>Gerenciar</v-list-item-title>
                <v-list-item-subtitle>CRUD completo</v-list-item-subtitle>
              </v-list-item>
              <v-list-item prepend-icon="mdi-view-grid">
                <v-list-item-title>Galeria</v-list-item-title>
                <v-list-item-subtitle>Visualização em cards</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-information</v-icon>
            Arquitetura do Projeto
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <h4 class="mb-2">Estrutura</h4>
                <v-list density="compact">
                  <v-list-item>
                    <v-list-item-title><code>/src/components</code></v-list-item-title>
                    <v-list-item-subtitle>Componentes reutilizáveis</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title><code>/src/views</code></v-list-item-title>
                    <v-list-item-subtitle>Páginas da aplicação</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title><code>/src/stores</code></v-list-item-title>
                    <v-list-item-subtitle>Gerenciamento de estado</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="4">
                <h4 class="mb-2">Componentes</h4>
                <v-list density="compact">
                  <v-list-item>
                    <v-list-item-title>ItemForm</v-list-item-title>
                    <v-list-item-subtitle>Formulário de CRUD</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>ItemCard</v-list-item-title>
                    <v-list-item-subtitle>Card de gerenciamento</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>GalleryCard</v-list-item-title>
                    <v-list-item-subtitle>Card visual da galeria</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="4">
                <h4 class="mb-2">Persistência</h4>
                <v-list density="compact">
                  <v-list-item>
                    <v-list-item-title>localStorage</v-list-item-title>
                    <v-list-item-subtitle>Armazenamento local</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Pinia Store</v-list-item-title>
                    <v-list-item-subtitle>Estado reativo</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>Auto-sync</v-list-item-title>
                    <v-list-item-subtitle>Sincronização automática</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row class="mt-4">
      <v-col cols="12" class="text-center">
        <v-card>
          <v-card-title class="d-flex align-center justify-center">
            <v-icon class="mr-2" color="primary">mdi-github</v-icon>
            Código Fonte
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-4">Acesse o repositório completo do projeto no GitHub</p>
            <v-btn
              href="https://github.com/MarcosScalcon/BIBLIOTECA_JOGOS_FILMES"
              target="_blank"
              color="primary"
              size="large"
              prepend-icon="mdi-github"
              variant="elevated"
            >
              Ver no GitHub
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SobreView'
}
</script>
