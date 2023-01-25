// mvc
import Model from './mvc/model'
import View from './mvc/view'
import Controller from './mvc/controller'

// styles
import './styles/_bundler.sass'

export default class {
  constructor(config) {
    // mvc
    this.Model = new Model(config)
    this.View = new View()
    this.Controller = new Controller(this.Model, this.View)
  }
}
