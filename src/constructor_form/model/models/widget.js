// helpers
import {
  get_element_model,
  get_computed_options,
  get_button_classes,
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
      get_computed_options(this.config, 'widget', {
        class: `
					--${this.config.styles.position_x}
					--${this.config.styles.position_y}
				`,
      }),
      [
        get_element_model(
          'form',
          get_computed_options(this.config, 'widget_form', {
            class: `
							windows
							--${this.config.styles.open_template}
						`,
          }),
          this.context.windows_model.get()
        ),
        get_element_model(
          null,
          get_computed_options(
            this.config,
            get_button_classes('widget_button', 'widget_button')
          ),
          ['widget_button']
        ),
      ]
    )
  }

  // get
  get() {
    return this.value
  }
}
