import { Button } from 'antd'

import { FolderOutlined, PlayCircleOutlined } from '@ant-design/icons'

import './ToolbarButton.css'

const ToolbarButton = () => {
  return (
    <div className='toolbar-button'>
      <Button icon={<FolderOutlined />} size='large'>
        Nueva Carpeta
      </Button>
      <Button icon={<PlayCircleOutlined />} size='large' type='primary'>
        Nuevo Video
      </Button>
    </div>
  )
}

export default ToolbarButton
