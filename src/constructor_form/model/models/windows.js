// helpers
import { get_element_model, get_computed_options, get_unic_id } from 'm_helpers'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.value = []
    this.context = context
    this.config = config
  }

  // create
  create() {
    this.config.views.windows.forEach((window, window_idx) => {
      const window_model = get_element_model(
        null,
        get_computed_options(this.config, 'window')
      )

      window.forEach((window_elem, window_elem_idx) => {
        const input_id = get_unic_id(window_idx, window_elem_idx)
        const input_model = this.context.input_model.get(window_elem, input_id)

        window_model.childs.push(input_model)
      })

      this.value.push(window_model)
    })
  }

  // get
  get() {
    return this.value
  }
}
