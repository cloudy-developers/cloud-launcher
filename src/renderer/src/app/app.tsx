import { AppRouting } from '@renderer/views'
import { withProviders } from './providers'

export const Application: React.FC = withProviders((): React.ReactElement => {
  return (
    <>
      <div id="titlebar" />
      <AppRouting />
    </>
  )
})
