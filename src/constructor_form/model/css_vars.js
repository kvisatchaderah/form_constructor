// assets
import { widget_data_name } from '@assets'

// export
export default class {
  // constructor
  constructor(context) {
    this.context = context
    this.value = []
  }

  //
  // create
  //

  create() {
    // no_style
    if (this.context.special.no_style) return

    this.add_vars()

    if (
      this.context.styles.vars.font_color &&
      this.context.styles.vars.background_color
    ) {
      this.add_rgb_colors()
    }
  }

  // add_var
  add_vars() {
    Object.keys(this.context.styles.vars).forEach((var_key) =>
      this.add_var(var_key, this.context.styles.vars[var_key])
    )
  }

  // add_var
  add_var(key, value) {
    this.value.push({
      key: this.write_css_vars_key(key),
      value: value,
    })
  }

  //
  // add_rgb_colors
  //

  add_rgb_colors() {
    // font_color_rgb
    const font_color_rgb = this.get_rgb_color(
      this.context.styles.vars.font_color,
      '00, 00, 00'
    )
    this.value.push({
      key: this.write_css_vars_key('font_color_rgb'),
      value: font_color_rgb,
    })

    // background_color_rgb
    const background_color_rgb = this.get_rgb_color(
      this.context.styles.vars.background_color,
      '256, 256, 256'
    )
    this.value.push({
      key: this.write_css_vars_key('background_color_rgb'),
      value: background_color_rgb,
    })
  }

  // get_rgb_color
  get_rgb_color(color, default_value) {
    if (!color.match(/#/g)) return default_value

    return color
      .match(/[^#]{2}/g)
      .map((color) => parseInt(color, 16))
      .join(', ')
  }

  write_css_vars_key(key) {
    return `--${widget_data_name}__` + key
  }

  // get
  get() {
    return this.value
  }
}
