import { ReactNode } from 'react'

import MenuNavigation from '../menu/MenuNavigation'
import MyPlanningCard from './Components/MyPlanningCard/MyPlanningCard'

import logo from '../../assets/svg/logo.svg'

import './MainLayout.css'
import { Grid } from 'antd'

const { useBreakpoint } = Grid

type LayoutProps = { children: ReactNode }

const MainLayout = ({ children }: LayoutProps) => {
  const { md } = useBreakpoint()

  return (
    <div className='main-layout'>
      <div className='main-layout__content-container'>
        <div className='main-layout__sider'>
          <div className='main-layout__sider-header'>
            <div className='main-layout__logo-container'>
              <img alt='logo' src={logo} className='main-layout-logo' />
            </div>
            <MenuNavigation className='main-layout__navigation-menu' />
          </div>
          {md && <MyPlanningCard />}
        </div>
        <div className='main-layout__content'>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
