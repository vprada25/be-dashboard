import { Button, Table, TableColumnsType } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

import './VideoTable.css'

const mockData = [
  {
    key: '1',
    name: 'Entrenamiento.mp4',
    duration: '04:11:37',
    size: '7.3 GB',
    date: '30/may/2023',
  },
  {
    key: '2',
    name: 'Salida-al-mercado-version-nueva.mp4',
    duration: '47:55',
    size: '1.4 GB',
    date: '22/jun/2023',
  },
  {
    key: '3',
    name: 'Como-cerrar-una-venta.mp4',
    duration: '10:12',
    size: '284 MB',
    date: '11/sep/2023',
  },
  {
    key: '4',
    name: 'Crea-un-ticket-valioso.mp4',
    duration: '02:11',
    size: '4.3 GB',
    date: '21/jun/2023',
  },
  {
    key: '5',
    name: 'Entrenamiento.mp4',
    duration: '04:11:37',
    size: '7.3 GB',
    date: '30/may/2023',
  },
  {
    key: '6',
    name: 'Salida-al-mercado-version-nueva.mp4',
    duration: '47:55',
    size: '1.4 GB',
    date: '22/jun/2023',
  },
  {
    key: '7',
    name: 'Como-cerrar-una-venta.mp4',
    duration: '10:12',
    size: '284 MB',
    date: '11/sep/2023',
  },
  {
    key: '8',
    name: 'Crea-un-ticket-valioso.mp4',
    duration: '02:11',
    size: '4.3 GB',
    date: '21/jun/2023',
  },
  {
    key: '9',
    name: 'Entrenamiento.mp4',
    duration: '04:11:37',
    size: '7.3 GB',
    date: '30/may/2023',
  },
  {
    key: '10',
    name: 'Salida-al-mercado-version-nueva.mp4',
    duration: '47:55',
    size: '1.4 GB',
    date: '22/jun/2023',
  },
]

type DataType = {
  key: string
  name: string
  duration: string
  size: string
  date: string
}

const VideoTable = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: '60%',
      render: (name: string) => (
        <div className='video-table__name'>
          <PlayCircleOutlined className='video-table__icon' />
          <Button type='text'>{name}</Button>
        </div>
      ),
    },
    {
      title: 'Tamaño',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Duración',
      dataIndex: 'duration',
      key: 'duration',
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
      dataSource={mockData}
      pagination={false}
      scroll={{ x: 'max-content' }}
      className='video-table'
    />
  )
}

export default VideoTable
