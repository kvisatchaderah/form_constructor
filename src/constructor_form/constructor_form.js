// mvc
import Model from './model/_model'
import View from './view/_view'
import Controller from './controller/_controller'

// styles
import '@styles/_bundler.sass'

export default class {
  constructor(config) {
    // mvc
    this.Model = new Model(config)
    this.View = new View()
    this.Controller = new Controller(this.Model, this.View)
  }
}
