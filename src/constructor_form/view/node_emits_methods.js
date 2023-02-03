// helpers
import { get_dynamic_class, classList_change } from '@v_helpers'

// assets
import { classes } from '@assets'

// export
export default {
  //
  // widget_button
  //

  // TODO переделать на вью модел
  // TODO добавить класс еррор инпуту

  on_widget_button() {
    classList_change(this.targets.widget)
  },

  //
  // tree_label
  //

  on_tree_label(e) {
    const closest_window_wrapper = e.target.closest(
      get_dynamic_class(classes.window_wrapper)
    )
    classList_change(closest_window_wrapper)
  },

  //
  // submit prev next
  //

  // on_submit
  on_submit() {
    this.next_step(this.submit, null)
  },

  // submit
  submit() {
    const data = this.targets.inputs
      .map((window_inputs) => {
        return window_inputs.map((input_object) => {
          const res = input_object.node.value
          input_object.node.value = ''
          return {
            name: input_object.node.placeholder,
            value: res,
          }
        })
      })
      .flat()

    console.log('---- ---- submit ---- ----')
    console.log(data)
    console.log('---- ---- submit ---- ----')

    // TODO create form || when rewrite view model add is_valid class in window
    this.on_widget_button()
  },

  // prev
  on_prev() {
    this.change_active(-1)
  },

  // next
  on_next() {
    this.next_step(this.change_active, 1)
  },

  // change active
  change_active(value) {
    classList_change(this.targets.windows[this.active_window])
    this.active_window += value
    classList_change(this.targets.windows[this.active_window])
  },

  //
  // next_step
  //

  next_step(next_step_method, next_step_args) {
    //
    // not first click
    //

    if (this.targets.inputs_listeners[this.active_window]) {
      next_step_method.call(this, next_step_args)
      return
    }

    //
    // first click
    //

    const current_inputs = this.targets.inputs[this.active_window]

    this.add_listener_to_inputs(current_inputs)
    this.set_valid_data_to_inputs(current_inputs)

    // do next method if values is valid
    if (this.targets.window_valids[this.active_window]) {
      next_step_method.call(this, next_step_args)
    }
  },

  //
  // on check valid
  //

  // add_listener_to_inputs
  add_listener_to_inputs(inputs) {
    const window_index = this.active_window

    inputs.forEach((input, input_index) => {
      input.node.addEventListener('input', () => {
        this.check_valid(window_index, input_index)
        // TODO add debounce
      })
    })

    this.targets.inputs_listeners[this.active_window] = true
  },

  // check_valid_to_inputs
  set_valid_data_to_inputs(inputs) {
    const window_index = this.active_window

    inputs.forEach((input, input_index) => {
      this.check_valid(window_index, input_index)
    })
  },

  //
  // check_valid
  //

  // check_valid
  check_valid(window_index, input_index) {
    const current_input = this.targets.inputs[window_index][input_index]
    const current_value = current_input.node.value

    // count is valid
    let is_valid = true
    if (current_input.filters) {
      current_input.filters.forEach((filter, filter_index) => {
        const current_valid = filter.valid_method(current_value, filter.param)

        // set false validation
        if (!current_valid) {
          is_valid = false
        }

        // change error class if need
        classList_change(
          current_input.errors[filter_index],
          current_valid ? 'remove' : 'add'
        )
        current_input.valids[filter_index] = current_valid
      })
    }

    // set current input valid
    current_input.valid = is_valid

    // set disable to button
    const window_valid = this.get_window_valid()
    const current_next_button = this.get_current_next_button()

    classList_change(
      current_next_button,
      window_valid ? 'remove' : 'add',
      'disable_classes'
    )

    this.targets.window_valids[this.active_window] = window_valid
  },

  // get_window_valid
  get_window_valid() {
    let window_valid = true

    this.targets.inputs[this.active_window].forEach((input) => {
      if (!input.valid) {
        window_valid = false
      }
    })

    return window_valid
  },

  // get_current_next_button
  get_current_next_button() {
    return this.emitters.next[this.active_window] || this.emitters.submit[0]
  },
}
