// assets
import { widget_data_name } from '@assets'

// export
export default class {
  // constructor
  constructor(context) {
    this.context = context
    this.value = []
  }

  // create
  create() {
    // no_style
    if (this.context.special.no_style) return

    // add_vars
    this.context.widget_vars.add_var('bc', this.context.styles.background_color)
    this.context.widget_vars.add_var('fc', this.context.styles.font_color)
    this.context.widget_vars.add_var('fs', this.context.styles.font_size)
    this.context.widget_vars.add_var('brad', this.context.styles.border_radius)
  }

  // add_var
  add_var(key, value) {
    this.context.widget_vars.value.push({
      key: `--${widget_data_name}__` + key,
      value: value,
    })
  }

  // get
  get() {
    return this.context.widget_vars.value
  }
}
