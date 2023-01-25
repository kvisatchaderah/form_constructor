export default {
  // create_widget_vars
  create_widget_vars() {
    // no_style
    if (this.special.no_style) return

    // background color
    if (this.styles.color_value) {
      this.add_var('background_color', this.styles.color_value)
    } else {
      this.add_var('background_color', this.styles.color_variants)
    }
  },

  // add_var
  add_var(key, value) {
    this.widget_vars.push({
      key: '--future_it_dent_widget__' + key,
      value,
    })
  },

  // get_widget_vars
  get_widget_vars() {
    return this.widget_vars
  },
}
