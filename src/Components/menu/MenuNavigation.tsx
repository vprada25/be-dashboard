import { useLocation } from 'react-router-dom'
import { routes } from '../../Router/routes'

import './MenuNavigation.css'

type MenuNavigationProps = { className?: string }

const MenuNavigation = ({ className }: MenuNavigationProps) => {
  const { pathname } = useLocation()

  const menuItems = routes.slice(0, 6).map((route, index) => {
    return {
      key: index,
      path: route.path,
      label: route.label,
      icon: route.icon,
      active:
        pathname === route.path || (pathname === '/' && index === 0)
          ? true
          : false,
    }
  })

  return (
    <div className={`menu-navigation__container ${className}`}>
      {menuItems.map((item) => (
        <div
          className={`menu-navigation__item${item.active ? '-active' : ''}`}
          key={item.key}
        >
          {item.icon}
          <a href={item.path}>{item.label}</a>
        </div>
      ))}
    </div>
  )
}

export default MenuNavigation
