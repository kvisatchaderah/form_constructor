// helpers
import { get_dynamic_selector, toggle_active } from '@v_helpers'

// assets
import { dynamic_classes } from '@assets'

// export
export default {
  //
  // submit prev next
  //

  // submit
  submit() {
    const current_node = this.targets.windows[this.active_window]

    if (this.is_correct_values(current_node)) {
      this.do_submit()
    } else {
      set_errors(current_node)
    }
  },

  // do_submit
  do_submit() {
    console.log('submit')
  },

  // prev
  prev() {
    this.change_active(-1)
  },

  // next
  next() {
    const current_node = this.targets.windows[this.active_window]
    if (this.is_correct_values(current_node)) {
      this.change_active(1)
    } else {
      set_errors(current_node)
    }
  },

  // change active
  change_active(value) {
    toggle_active(this.targets.windows[this.active_window])
    this.active_window += value
    toggle_active(this.targets.windows[this.active_window])
  },

  //
  // correct methods
  //

  // is correct values
  is_correct_values(node) {
    const inputs = node.querySelectorAll(
      get_dynamic_selector(dynamic_classes.input)
    )

    console.log('inputs: ', inputs)
    return true
  },

  //
  // widget_button
  //

  widget_button() {
    toggle_active(this.targets.widget)
  },

  //
  // tree_label
  //

  tree_label(e) {
    const closest_window_wrapper = e.target.closest(
      get_dynamic_selector(dynamic_classes.window_wrapper)
    )
    toggle_active(closest_window_wrapper)
  },
}
