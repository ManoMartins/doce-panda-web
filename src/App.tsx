import { Suspense } from 'react'
import { ThemeProvider } from '@primer/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import GlobalStyle from './styles/global-styles'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { AuthContextProvider } from '@contexts/use-auth'
import { CartContextProvider } from '@contexts/use-cart'
export const queryClient = new QueryClient()

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <GlobalStyle />

            <Suspense fallback={<p>Loading...</p>}>
              <div className="App">{useRoutes(routes)}</div>
            </Suspense>
          </ThemeProvider>
        </QueryClientProvider>
      </CartContextProvider>
    </AuthContextProvider>
  )
}

export default App
