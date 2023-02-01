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

    this.add_vars(this.context.styles.vars)
  }

  // add_var
  add_vars(vars_object) {
    Object.keys(vars_object).forEach((var_key) =>
      this.add_var(var_key, vars_object[var_key])
    )
  }

  // add_var
  add_var(key, value) {
    this.value.push({
      key: `--${widget_data_name}__` + key,
      value: value,
    })
  }

  // get
  get() {
    return this.value
  }
}
