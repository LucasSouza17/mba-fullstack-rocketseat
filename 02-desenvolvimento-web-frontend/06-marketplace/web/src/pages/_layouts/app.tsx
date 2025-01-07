import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { api } from '../../lib/axios'
import { Header } from '../../components/header'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.message

          if (status === 401 && code === 'Unauthorized') {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div className="flex min-h-screen flex-col antialiased bg-shape-background">
      <Header />

      <div className="max-w-[1366px] w-full mx-auto flex flex-1 flex-col gap-4  p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
