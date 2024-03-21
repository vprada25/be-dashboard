import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AntdWrapper from '../Wrappers/AntdWrapper'
import MainLayout from '../Components/layout/MainLayout'

import { routes } from '../Router/routes'

import './App.css'

const App = () => {
  return (
    <AntdWrapper>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </AntdWrapper>
  )
}

export default App
