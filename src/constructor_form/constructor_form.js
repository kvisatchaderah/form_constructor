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

    // init
    this.Controller.init()
  }
}

// TODO write class active
// TODO write class disable
// TODO виджет баттон сайз
// TODO виджет позишин 80 90 70 72%
// TODO виджет айкон
