import { ReactElement } from 'react'
import { App, ConfigProvider } from 'antd'

import antdEsLocale from 'antd/lib/locale/es_ES'

type AntdWrapperProps = { children: ReactElement }

const AntdWrapper = ({ children }: AntdWrapperProps) => {
  return (
    <ConfigProvider
      locale={antdEsLocale}
      theme={{ token: { colorPrimary: '#4A00FF', fontFamily: 'Poppins' } }}
    >
      <App>{children}</App>
    </ConfigProvider>
  )
}

export default AntdWrapper
