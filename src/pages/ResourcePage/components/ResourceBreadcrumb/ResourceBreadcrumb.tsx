import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import './ResourceBreadcrumb.css'

const ResourceBreadcrumb = () => {
  return (
    <div className='resource-breadcrumb'>
      <Button
        type='primary'
        icon={<ArrowLeftOutlined />}
        size='large'
        href='/'
      />

      <h2>
        <span className='resource-breadcrumb__title'>Home</span> / BeMaster
      </h2>
    </div>
  )
}

export default ResourceBreadcrumb
