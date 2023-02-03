// import
import { classes } from '@assets'

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
				`,
      }),
      [
        get_element_model(
          null,
          get_computed_options(this.config, 'widget_form', {
            class: `
							--mode_${this.config.views.mode}
							${
                this.config.styles.open_template
                  ? '--' + this.config.styles.open_template
                  : ''
              }
						`,
          }),
          [
            get_element_model(
              null,
              get_computed_options(this.config, 'widget_button', {
                class: `
									--close
								`,
              }),
              [
                get_element_model('svg', {
                  svg_name: 'x',
                  class: '',
                }),
              ]
            ),
            ...this.context.windows_model.get(),
          ]
        ),
        get_element_model(
          null,
          get_computed_options(this.config, 'widget_button', {
            class: `
							--open
						`,
          }),
          [get_element_model('svg', { svg_name: 'message_square', class: '' })]
        ),
      ]
    )
  }

  // get
  get() {
    return this.value
  }
}
