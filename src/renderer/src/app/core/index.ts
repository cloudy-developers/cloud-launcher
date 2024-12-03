import ReactDOM from 'react-dom/client'
import { AppComponent, CoreConfiguration } from './core'

/**
 * Core is the main class of the web-application.
 * Here you can control the mounting in the application.
 */
class Core {
  private configuration: CoreConfiguration = {
    AppComponent: () => void 0,
    AppDOMNode: () => document.getElementById('root') as HTMLDivElement,
    AppReactDOM: null
  }

  constructor(application: AppComponent) {
    this.configuration.AppComponent = application
    console.info('Core::%cCore is enabled.', 'background: #222; color: #bada55')
  }

  /**
   * Method for mount the web part of application.
   * @param DomNode
   */
  mount(DomNode: HTMLDivElement): void {
    const { AppComponent } = this.configuration
    this.configuration.AppReactDOM = ReactDOM.createRoot(DomNode)
    this.configuration.AppReactDOM.render(AppComponent())
  }

  /**
   * The static method for setup the core of application.
   * @param component application
   */
  static setup(component: AppComponent): void {
    const core = new Core(component)
    const { AppDOMNode } = core.configuration

    core.mount(AppDOMNode())

    return void 0
  }
}

export default Core
