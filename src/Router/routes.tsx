import { ConfigurationIcon } from '../assets/svg'

import ErrorNotFound from '../pages/ErrorNotFound/ErrorNotFound'

import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  FolderOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'

import VideosPage from '../pages/VideosPage/VideosPage'
import ResourcePage from '../pages/ResourcePage/ResourcePage'

type RoutesType = {
  path: string
  element: JSX.Element
  icon: JSX.Element
  label: string
}

export const routes: RoutesType[] = [
  {
    path: '/dashboard',
    element: <VideosPage />,
    icon: <AppstoreOutlined />,
    label: 'Dashboard',
  },
  {
    path: '/videos',
    element: <VideosPage />,
    icon: <FolderOutlined />,
    label: 'Videos',
  },
  {
    path: '/player',
    element: <VideosPage />,
    icon: <PlayCircleOutlined />,
    label: 'Player',
  },
  {
    path: '/analytics',
    element: <VideosPage />,
    icon: <BarChartOutlined />,
    label: 'Analytics',
  },
  {
    path: '/configuraciones',
    element: <VideosPage />,
    icon: <ConfigurationIcon />,
    label: 'Configuraciones',
  },
  {
    path: '/help',
    element: <VideosPage />,
    icon: <QuestionCircleOutlined />,
    label: 'Ayuda',
  },
  {
    path: '/resources',
    element: <ResourcePage />,
    icon: <AppstoreAddOutlined />,
    label: 'Resources',
  },
  {
    path: '/',
    element: <VideosPage />,
    icon: <AppstoreAddOutlined />,
    label: 'Home',
  },
  {
    path: '*',
    element: <ErrorNotFound />,
    icon: <ConfigurationIcon />,
    label: 'ErrorNotFound',
  },
]
