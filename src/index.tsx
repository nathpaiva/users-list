import { createRoot } from 'react-dom/client'

import { Main } from './pages/Main'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<Main />)
