import { FolderOutlined } from '@ant-design/icons'
import { Button, Table, TableColumnsType } from 'antd'

import './ResourcesTable.css'

const mockData = [
  {
    key: '1',
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    date: '30/may/2023',
  },
  {
    key: '2',
    name: 'Be Master',
    videos: 21,
    size: '1.4 GB',
    date: '22/jun/2023',
  },
  {
    key: '3',
    name: 'Comizzion',
    videos: 10,
    size: '284 MB',
    date: '11/sep/2023',
  },
  {
    key: '4',
    name: 'Creador de contenido',
    videos: 2,
    size: '4.3 GB',
    date: '21/jun/2023',
  },
  {
    key: '5',
    name: 'Exportados wii',
    videos: 8,
    size: '7.3 GB',
    date: '30/may/2023',
  },
  {
    key: '6',
    name: 'Afiliado Master',
    videos: 8,
    size: '7.3 GB',
    date: '30/may/2023',
  },
  {
    key: '7',
    name: 'Be Master',
    videos: 21,
    size: '1.4 GB',
    date: '22/jun/2023',
  },
  {
    key: '8',
    name: 'Comizzion',
    videos: 10,
    size: '284 MB',
    date: '11/sep/2023',
  },
]

type ResourcesTableProps = { isLibrarySectionVisible: boolean }

type DataType = {
  key: string
  name: string
  videos: number
  size: string
  date: string
}

const ResourcesTable = ({ isLibrarySectionVisible }: ResourcesTableProps) => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: '60%',
      render: (name: string) => (
        <div className='resources-table__name'>
          <FolderOutlined className='resources-table__icon' />{' '}
          <Button type='text' href='/resources'>
            {name}
          </Button>
        </div>
      ),
    },
    {
      title: 'Videos',
      dataIndex: 'videos',
      key: 'videos',
    },
    {
      title: 'Tamaño',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Ultima modificación',
      dataIndex: 'date',
      key: 'date',
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
  }

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={isLibrarySectionVisible ? mockData : mockData.slice(0, 3)}
      pagination={false}
      scroll={{ x: 'max-content' }}
      className='resources-table'
    />
  )
}

export default ResourcesTable
