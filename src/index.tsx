import React from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './input.css'

import { Main } from './pages/Main'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="text-foreground bg-background">
        <Main />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
