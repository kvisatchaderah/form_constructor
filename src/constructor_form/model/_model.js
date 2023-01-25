// helpers
import ViewModel from './view_model'
import WidgetVars from './widget_vars'

// export
export default class {
  // constructor
  constructor({ styles, special, views }) {
    // config
    this.styles = styles
    this.special = special
    this.views = views

    this.view_model = new ViewModel(this)
    this.widget_vars = new WidgetVars(this)

    // init
    this.view_model.create()
    this.widget_vars.create()
  }
}
