import './index.css'

import dayjs from "dayjs";
import "dayjs/locale/pt-br";


dayjs.locale("pt-br");

import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { router } from './routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
