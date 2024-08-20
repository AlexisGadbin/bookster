import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import BaseLayout from './components/layouts/base-layout.tsx'
import { ThemeProvider } from './components/providers/theme-provider.tsx'
import i18n from './i18n.ts'
import './index.css'
import { Router } from './router.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <QueryClientProvider client={queryClient}>
            <BaseLayout>
              <Router />
            </BaseLayout>
            <ReactQueryDevtools initialIsOpen={false} position="left" />
          </QueryClientProvider>
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
