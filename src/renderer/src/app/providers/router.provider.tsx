import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { RouterConfig } from '../router/config'

export const RouterProvider = (component: () => React.ReactNode) => () => {
  return (
    <HashRouter {...RouterConfig}>
      <Suspense>{component()}</Suspense>
    </HashRouter>
  )
}
