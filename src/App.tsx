import { CssBaseline, ThemeProvider } from '@mui/material'

import { HomePage } from 'pages/HomePage'
import { theme } from 'global/styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
