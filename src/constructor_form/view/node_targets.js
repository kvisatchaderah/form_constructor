// helpers
import { get_dynamic_selector } from '@v_helpers'

// assets
import { dynamic_classes } from '@assets'

// export
export default {
  // set_targets
  set_targets() {
    this.targets.widget = document.querySelector(get_dynamic_selector('widget'))
    this.targets.windows = document.querySelectorAll(
      get_dynamic_selector(dynamic_classes.window)
    )
    this.targets.window_wrapper = document.querySelectorAll(
      get_dynamic_selector(dynamic_classes.window_wrapper)
    )
  },
}
