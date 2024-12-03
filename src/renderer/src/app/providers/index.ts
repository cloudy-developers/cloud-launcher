import { compose } from '@reduxjs/toolkit'

import { ReduxProvider } from './redux.provider'
import { RouterProvider } from './router.provider'

export const withProviders = compose<React.FC>(ReduxProvider, RouterProvider)
