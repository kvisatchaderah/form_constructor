//assets
import { create_node, add_node } from './helpers/_helpers'

// mvc
import Model from './mvc/model'
import View from './mvc/view'
import Controller from './mvc/controller'

export default class {
  constructor({ styles, special, views }) {
    // config
    this.styles = styles
    this.special = special
    this.views = views

    // mvc
    this.Model = Model
    this.View = View
    this.Controller = Controller

    this.windows = [
      [
        { tag: 'div', text: ['div 1 1'], id: 11 },
        { tag: 'div', text: ['div 1 2'], id: 12 },
      ],
      [
        { tag: 'div', text: ['div 2 1'], id: 21 },
        { tag: 'div', text: ['div 2 2'], id: 22 },
      ],
    ]

    this.widnows_node = this.windows.map((window) => {
      const window_node = window.map((el) =>
        create_node(el.tag, { id: el.id }, el.text)
      )
      return create_node('div', { class: 'window' }, window_node)
    })

    const windows_cont = create_node('div', { class: 'windows' })

    add_node(this.widnows_node, windows_cont)
    add_node(windows_cont)
  }
}
