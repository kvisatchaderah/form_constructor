// assets
import { widget_data_name, vars_of_themes } from '@assets'

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

    // computed vars

    const { background_color, font_color } = this.get_computed_vars()

    // add_vars
    this.add_var('bc', background_color)
    this.add_var('fc', font_color)
    this.add_var('fs', this.context.styles.font_size)
    this.add_var('brad', this.context.styles.border_radius)
  }

  // get_computed_vars
  get_computed_vars() {
    // computed
    const background_color = this.context.styles.current_style
      ? this.get_theme_var('background_color')
      : this.context.styles.background_color

    const font_color = this.context.styles.current_style
      ? this.get_theme_var('font_color')
      : this.context.styles.font_color

    // return
    return {
      background_color,
      font_color,
    }
  }

  // get_theme_var
  get_theme_var(current_var) {
    return vars_of_themes[this.context.styles.current_style][current_var]
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
