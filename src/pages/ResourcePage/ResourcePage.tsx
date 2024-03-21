import { Card } from 'antd'

import VideoTable from '../../Components/table/VideoTable/VideoTable'
import ResourceBreadcrumb from './components/ResourceBreadcrumb/ResourceBreadcrumb'

const ResourcePage = () => {
  return (
    <Card className='container'>
      <ResourceBreadcrumb />
      <VideoTable />
    </Card>
  )
}

export default ResourcePage
