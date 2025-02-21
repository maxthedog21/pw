/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'neonTheme',
    themes: {
      neonTheme: {
      dark: true,
      colors: {
          background: '#050505', // Deep black with a slight tint for depth
          surface: '#0d0d0d', // Dark gray for subtle contrast
          primary: '#00ffcc', // Neon cyan for futuristic styling
          secondary: '#ff5500', // Deep neon orange for contrast
          accent: '#ff00ff', // Bright magenta for highlights
          success: '#00ff00', // Neon green for positive actions
          warning: '#ffcc00', // Warm yellow for warnings
          error: '#ff0033', // Intense red for errors
          info: '#3399ff', // Cool blue for informational elements
      }
    }
    }
  },
})
