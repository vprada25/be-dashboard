import { Card, Grid, Tabs } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { BookIcon } from '../../assets/svg'
import ToolbarButton from './components/ToolbarButton/ToolbarButton'
import LibrarySection from './components/LibrarySection/LibrarySection'

import './VideosPage.css'

const { useBreakpoint } = Grid

const VideosPage = () => {
  const screens = useBreakpoint()

  const items = [
    {
      key: '1',
      label: 'Biblioteca',
      children: <LibrarySection isLibrarySectionVisible />,
      icon: <BookIcon />,
    },
    {
      key: '2',
      label: 'Papelera',
      children: <LibrarySection isLibrarySectionVisible={false} />,
      icon: <DeleteOutlined />,
    },
  ]

  return (
    <Card className='container'>
      {screens.xs && <ToolbarButton />}
      <Tabs
        items={items}
        size='large'
        tabBarExtraContent={!screens.xs && <ToolbarButton />}
      />
    </Card>
  )
}

export default VideosPage
