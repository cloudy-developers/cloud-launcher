import { Application } from './app'
import Core from './core'

import '@renderer/app/css/global.css'

Core.setup(() => <Application />)
