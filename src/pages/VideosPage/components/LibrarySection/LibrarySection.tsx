import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import ResourcesTable from '../../../../Components/table/ResourcesTable/ResourcesTable'

import './LibrarySection.css'

type LibrarySectionProps = { isLibrarySectionVisible: boolean }

const LibrarySection = ({ isLibrarySectionVisible }: LibrarySectionProps) => {
  return (
    <div className='library-section'>
      <Input
        addonBefore={<SearchOutlined />}
        size='large'
        style={{ maxWidth: 600 }}
        placeholder='Buscar Video'
      />
      <ResourcesTable isLibrarySectionVisible={isLibrarySectionVisible} />
    </div>
  )
}

export default LibrarySection
