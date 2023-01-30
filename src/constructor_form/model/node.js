// models
import InputModel from './models/input'
import WidgetModel from './models/widget'
import WindowsModel from './models/windows'
import ButtonsModel from './models/buttons_'

// export
export default class {
  // constructor
  constructor(context) {
    this.value = null

    // models
    this.windows_model = new WindowsModel(this, context)
    this.input_model = new InputModel(this, context)
    this.buttons_model = new ButtonsModel(this, context)
    this.widget_model = new WidgetModel(this, context)
  }

  // create
  create() {
    this.windows_model.create()
    this.buttons_model.create()
    this.widget_model.create()

    this.value = this.widget_model.get()
  }

  // get
  get() {
    return this.value
  }
}
