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

    // background color
    if (this.context.styles.color_value) {
      this.context.widget_vars.add_var(
        'background_color',
        this.context.styles.color_value
      )
    } else {
      this.context.widget_vars.add_var(
        'background_color',
        this.context.styles.color_variants
      )
    }
  }

  // add_var
  add_var(key, value) {
    this.context.widget_vars.value.push({
      key: '--future_it_dent_widget__' + key,
      value,
    })
  }

  // get
  get() {
    return this.context.widget_vars.value
  }
}
