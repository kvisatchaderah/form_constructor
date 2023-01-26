// helpers
import { get_element_model, get_computed_options } from 'm_helpers'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.value = null
    this.context = context
    this.config = config
  }

  // create
  create() {
    this.value = get_element_model(
      null,
      get_computed_options(this.config, 'widget'),
      [
        get_element_model(
          'form',
          get_computed_options(this.config, 'widget_form', {
            class: 'windows',
          }),
          this.context.windows_model.get()
        ),
        get_element_model(
          'button',
          get_computed_options(this.config, 'widget_button'),
          ['form button']
        ),
      ]
    )
  }

  // get
  get() {
    return this.value
  }
}
