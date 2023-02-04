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

  //
  // create
  //

  create() {
    this.value = get_element_model(
      null,
      get_computed_options(this.config, 'widget', {
        class: this.get_config_modifications(),
      }),
      [
        this.context.form_model.get(),
        this.context.widget_buttons_model.get('open'),
      ]
    )
  }

  //
  // get config classes modifications
  //

  get_config_modifications() {
    return Object.keys(this.config.styles).reduce(
      this.get_config_modification,
      ''
    )
  }

  get_config_modification = (modifications, style_key) => {
    if (typeof this.config.styles[style_key] === 'string') {
      return `
				${modifications}
				--${style_key}__${this.config.styles[style_key]}
			`
    } else {
      return `
				${modifications}
				--${this.config.styles[style_key] ? 'has_' : 'not_'}${style_key}
			`
    }
  }

  //
  // get
  //

  get() {
    return this.value
  }
}
