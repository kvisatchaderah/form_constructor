// helpers
import { get_dynamic_class } from '@v_helpers'

// assets
import { classes } from '@assets'

// export
export default {
  // set_targets
  set_targets() {
    this.targets.widget = document.querySelector(get_dynamic_class('widget'))
    this.targets.windows = document.querySelectorAll(
      get_dynamic_class(classes.window)
    )
    this.targets.window_wrapper = document.querySelectorAll(
      get_dynamic_class(classes.window_wrapper)
    )
  },
}
