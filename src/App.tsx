import { ThemeProvider } from '@primer/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import GlobalStyle from './styles/global-styles'

import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
export const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />

        <div className="App">{useRoutes(routes)}</div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
