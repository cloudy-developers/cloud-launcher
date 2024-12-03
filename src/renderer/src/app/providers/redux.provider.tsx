import { Provider } from 'react-redux'
import store from '../store'

export const ReduxProvider = (component: () => React.ReactElement) => () => {
  return <Provider store={store} children={component()} />
}
