import { compose } from '@reduxjs/toolkit'

import { ReduxProvider } from './redux.provider'

export const withProviders = compose<React.FC>(ReduxProvider)
