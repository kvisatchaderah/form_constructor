// helpers
import { get_element_model, get_computed_options } from '@m_helpers'

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
					${this.config.styles.side ? '--' + this.config.styles.side : ''}
					${this.config.styles.position ? '--' + this.config.styles.position : ''}
					${this.config.styles.shadow ? '--shadow' : ''}
					${
            this.config.styles.widget_button_close_position
              ? '--widget_button_close_position__' +
                this.config.styles.widget_button_close_position
              : ''
          }
					${
            this.config.styles.label_transform
              ? '--label_transform__' + this.config.styles.label_transform
              : ''
          }
					${this.config.views.mode ? '--mode__' + this.config.views.mode : ''}
					${
            this.config.styles.open_template
              ? '--' + this.config.styles.open_template
              : ''
          }
						
				`,
      }),
      [
        this.context.form_model.get(),
        this.context.widget_buttons_model.get('open'),
      ]
    )
  }

  // get
  get() {
    return this.value
  }
}
