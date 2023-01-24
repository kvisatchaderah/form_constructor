//assets
import { create_node, add_node } from './helpers/_helpers'

// mvc
import Model from './mvc/model'
import View from './mvc/view'
import Controller from './mvc/controller'

// styles
import './styles/_bundler.sass'

export default class {
  constructor(config) {
    // data
    this.init_config = config
    this.view_model = null

    // mvc
    this.Model = null
    this.View = null
    this.Controller = null

    this.init()

    // this.windows = [
    //   [
    //     { tag: 'div', text: ['div 1 1'], id: 11 },
    //     { tag: 'div', text: ['div 1 2'], id: 12 },
    //   ],
    //   [
    //     { tag: 'div', text: ['div 2 1'], id: 21 },
    //     { tag: 'div', text: ['div 2 2'], id: 22 },
    //   ],
    // ]

    // this.widnows_node = this.windows.map((window) => {
    //   const window_node = window.map((el) =>
    //     create_node(el.tag, { id: el.id }, el.text)
    //   )
    //   return create_node('div', { class: 'window' }, window_node)
    // })

    // const windows_cont = create_node('div', { class: 'windows' })

    // add_node(this.widnows_node, windows_cont)
    // add_node(windows_cont)
  }

  init() {
    this.Model = new Model(this.init_config)
    this.view_model = this.Model.get_veiw_model()
    console.log('this.view_model: ', this.view_model)

    this.View = new View(this.view_model)
    this.Controller = new Controller()
  }
}
