import { createTheme } from '@mui/material'
import { ptBR } from '@mui/material/locale'

import 'global/fonts/soleil/index.css'

export const theme = createTheme(
  {
    typography: {
      fontFamily: 'SoleilRegular, sans-serif',
      fontSize: 16,
      h1: {
        fontFamily: 'SoleilBold, sans-serif'
      },
      button: {
        fontFamily: 'SoleilBook, sans-serif',
        textTransform: 'none'
      }
    }
  },
  ptBR
)
