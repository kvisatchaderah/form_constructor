// helpers
import { get_dynamic_class } from '@v_helpers'

// assets
import { classes, filters } from '@assets'

// export
export default {
  // set_targets
  set_targets() {
    this.set_general_targets()
    this.set_inputs()
  },

  // set_general_targets
  set_general_targets() {
    this.targets.widget = document.querySelector(get_dynamic_class('widget'))
    this.targets.windows = document.querySelectorAll(
      get_dynamic_class(classes.window)
    )
    this.targets.window_wrappers = document.querySelectorAll(
      get_dynamic_class(classes.window_wrapper)
    )
  },

  // set_inputs
  set_inputs() {
    this.targets.inputs = []
    this.targets.window_valids = []
    this.targets.inputs_listeners = []
    ;[...this.emitters.next, ...this.emitters.submit].forEach((button_node) => {
      // search inputs
      const inputs_container =
        button_node.closest(get_dynamic_class(classes.window)) ||
        button_node.closest(get_dynamic_class(classes.form))
      const inputs = inputs_container.querySelectorAll(
        get_dynamic_class(classes.input)
      )

      // set input models
      const input_models = [...inputs].map(this.get_input_model)

      // push result
      this.targets.inputs.push(input_models)
      this.targets.inputs_listeners.push(false)
      this.targets.window_valids.push(true)
    })
  },

  // get_input_model
  get_input_model(input) {
    const data_filters = input.dataset.filters

    // not filters
    if (!data_filters)
      return {
        valid: true,
        filters: false,
        errors: false,
        node: input,
      }

    // has filters
    const input_filters = data_filters.split(' ').map((input_filter) => {
      return {
        key: input_filter,
        param: input.dataset[`filter_${input_filter}`],
        valid_method: filters[input_filter].valid_method,
      }
    })

    const valids = []
    const errors = []

    input_filters.forEach((input_filter) => {
      valids.push(true)
      errors.push(
        input
          .closest(get_dynamic_class(classes.input_wrapper))
          .querySelector(`div[data-error="${input_filter.key}"]`)
      )
    })

    // return
    return {
      valid: true,
      filters: input_filters,
      errors: errors,
      valids: valids,
      node: input,
    }
  },
}
