import { ThemeProvider } from '@primer/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/home'

import GlobalStyle from './styles/global-styles'

export const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />

        <div className="App">
          <HomePage />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
