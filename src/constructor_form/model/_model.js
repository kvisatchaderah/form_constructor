// assets
import { init_view_model } from '@assets'

// mixins
import create_view_model from './create_view_model'
import create_widget_vars from './create_widget_vars'

// class
const Model = class {
  constructor({ styles, special, views }) {
    // data
    this.view_model = init_view_model
    this.widget_vars = []
    this.unic_data = Math.round(10 ** 6 * Math.random())

    // config
    this.styles = styles
    this.special = special
    this.views = views

    // init
    this.create_view_model()
    this.create_widget_vars()
  }
}

// on mixins
Object.assign(Model.prototype, create_view_model, create_widget_vars)

// export
export default Model
