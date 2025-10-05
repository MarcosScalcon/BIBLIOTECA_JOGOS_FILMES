import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const customTheme = {
  dark: true,
  colors: {
    primary: '#2E7D32',
    'primary-darken-1': '#1B5E20',
    'primary-lighten-1': '#4CAF50',
    secondary: '#66BB6A',
    accent: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',
    success: '#4CAF50',
    background: '#121212',
    surface: '#1E1E1E',
    'surface-variant': '#2D2D2D',
    'on-surface': '#FFFFFF',
    'on-surface-variant': '#B0B0B0'
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  },
  defaults: {
    VCard: {
      elevation: 4,
      rounded: 'lg'
    },
    VBtn: {
      rounded: 'lg',
      elevation: 2
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable'
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable'
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable'
    }
  }
})