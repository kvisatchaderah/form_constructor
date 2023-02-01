// import
import { classes } from '@assets'

// helpers
import {
  get_element_model,
  get_computed_options,
  get_classes,
} from '@m_helpers'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.value = null
    this.context = context
    this.config = config
  }

  // create
  create() {
    this.value = get_element_model(
      null,
      get_computed_options(this.config, classes.widget, {
        class: `
					--${this.config.styles.position_x}
					--${this.config.styles.position_y}
				`,
      }),
      [
        get_element_model(
          null,
          get_computed_options(this.config, classes.form, {
            class: `
							windows
							--${this.config.styles.open_template}
						`,
          }),
          this.context.windows_model.get()
        ),
        get_element_model(
          null,
          get_computed_options(this.config, classes.widget_button, {
            class: `
							widget_button
						`,
          }),
          [
            get_element_model('svg', { svg_name: 'message_square' }),
            get_element_model('span', null, ['widget_button']),
          ]
        ),
      ]
    )
  }

  // get
  get() {
    return this.value
  }
}
