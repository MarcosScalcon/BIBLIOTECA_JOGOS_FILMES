# Biblioteca de Jogos e Filmes

Sistema web para gerenciar uma coleção pessoal de jogos e filmes desenvolvido para a disciplina de **Frameworks Modernos para Desenvolvimento de Sistemas** da UNEMAT.

## Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript reativo
- **Vuetify 3** - Biblioteca de componentes Material Design 
- **Vue Router** - Sistema de roteamento
- **Pinia** - Gerenciamento de estado
- **Vite** - Build tool e servidor de desenvolvimento
- **localStorage** - Persistência de dados local

## Funcionalidades

### Requisitos Obrigatórios (AVA1)
- [x] Aplicação com pelo menos 3 páginas
- [x] Vue Router para navegação
- [x] Componentes reutilizáveis com props/emit
- [x] Diretivas Vue (v-for, v-if, v-bind, v-on, v-model)
- [x] CRUD completo (Create, Read, Update, Delete)
- [x] Persistência em localStorage

### Funcionalidades Implementadas
- **Dashboard**: Estatísticas da coleção, últimos itens adicionados
- **Gerenciar**: CRUD completo com formulário e validações
- **Galeria**: Visualização em cards com filtros
- **Sobre**: Informações técnicas do projeto

### Recursos Extras
- Sistema de avaliação com estrelas (1-5)
- Filtros por gênero, tipo e nota mínima
- Busca por título
- Tema escuro customizado
- Design responsivo
- Dados de exemplo pré-carregados

## Instalação e Execução

### Pré-requisitos
- Node.js 18 ou superior
- npm ou yarn

### Passos
1. Clone o repositório
```bash
git clone https://github.com/MarcosScalcon/BIBLIOTECA_JOGOS_FILMES
cd BIBLIOTECA_JOGOS_FILMES
```

2. Instale as dependências
```bash
npm install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
```

4. Acesse no navegador: http://localhost:5173

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção  
npm run preview  # Preview do build
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ItemForm.vue    # Formulário CRUD
│   ├── ItemCard.vue    # Card para gerenciamento
│   └── GalleryCard.vue # Card visual da galeria
├── views/              # Páginas da aplicação
│   ├── HomeView.vue    # Dashboard principal
│   ├── BibliotecaView.vue # Gerenciamento CRUD
│   ├── GaleriaView.vue # Visualização em galeria
│   └── SobreView.vue   # Informações do projeto
├── stores/             # Gerenciamento de estado
│   └── biblioteca.js   # Store principal com Pinia
├── router/             # Configuração de rotas
│   └── index.js        # Rotas da aplicação
├── plugins/            # Configurações
│   └── vuetify.js      # Configuração do Vuetify
└── styles/             # Estilos globais
    └── theme.css       # Tema customizado
```

## Diretivas Vue Utilizadas

O projeto demonstra o uso das principais diretivas Vue:

- **v-for**: Renderização de listas (itens, estatísticas, filtros)
- **v-if/v-else**: Renderização condicional (estados vazios, modo edição)
- **v-bind**: Vinculação de atributos (:class, :color, :to)
- **v-on**: Manipulação de eventos (@click, @submit, @edit)
- **v-model**: Vinculação bidirecional (formulários, filtros)

## Persistência de Dados

Os dados são automaticamente salvos no localStorage do navegador através do Pinia store. A aplicação inclui dados de exemplo que são carregados na primeira execução.

## Equipe de Desenvolvimento

- **Marcos Vinicius Carvalho Scalcon** - 20230009953
- **Natan de Almeida Benites** - 20230011011

**Instituição**: UNEMAT - Universidade do Estado do Mato Grosso  
**Disciplina**: Frameworks Modernos para Desenvolvimento de Sistemas  
**Data de Entrega**: 05/10/2025
