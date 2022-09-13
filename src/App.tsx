import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from 'containers/Dashboard'
import Error from 'containers/Error'
import Login from 'containers/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'antd/dist/antd.css'
import Home from './containers/Home'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
