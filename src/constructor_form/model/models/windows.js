// helpers
import {
  get_element_model,
  get_computed_options,
  get_unic_id,
  add_options,
  get_classes,
} from '@m_helpers'

// assets
import { classes } from '@assets'

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
    this.create_standart_model()

    if (this.config.views.mode === 'tree') {
      this.update_model_to_tree_mode()
    }
  }

  // create_standart_model
  create_standart_model() {
    this.config.views.windows.forEach((window, window_idx) => {
      const window_model = get_element_model(
        null,
        get_computed_options(this.config, classes.window)
      )

      window.forEach((window_elem, window_elem_idx) => {
        const input_id = get_unic_id(window_idx, window_elem_idx)
        const input_model = this.context.input_model.get(window_elem, input_id)

        window_model.childs.push(input_model)
      })

      this.value.push(window_model)
    })
  }

  //
  // tree_mode
  //

  // update_model_to_tree_mode
  update_model_to_tree_mode() {
    this.value = this.value.map(this.add_wrapper_to_window)
  }

  // add_wrapper_to_window
  add_wrapper_to_window = (window_model, window_index) => {
    const window_wrapper_model = get_element_model(
      null,
      { class: classes.window_wrapper },
      [
        get_element_model(
          null,
          {
            class: get_classes('tree_label', 'tree_label'),
          },
          [this.config.views.tree_labels[window_index]]
        ),

        window_model,
      ]
    )

    return window_wrapper_model
  }

  // get
  get() {
    return this.value
  }
}
