// helpers
import { get_element_model, set_input_filters } from '@m_helpers'

// assets
import { dynamic_classes } from '@assets'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.config = config

    this.set_get_method()
  }

  // set
  set_get_method() {
    this.get = this.config.styles.labels
      ? this.get_with_label
      : this.get_without_label
  }

  // has label
  get_with_label(input_config, input_id) {
    return get_element_model('div', { class: 'input_wrapper' }, [
      get_element_model(
        'label',
        {
          for: input_id,
          class: 'input_label',
        },
        [input_config.name]
      ),
      get_element_model('input', {
        ...{
          id: input_id,
          placeholder: this.config.styles.placeholders ? input_config.name : '',
          type: input_config.type,
          class: dynamic_classes.input + input_config.required,
        },
        ...set_input_filters(input_config),
      }),
    ])
  }

  // not label
  get_without_label(input_config) {
    return get_element_model('input', {
      ...{
        placeholder: this.config.styles.placeholders ? input_config.name : '',
        type: input_config.type,
        class: dynamic_classes.input + input_config.required,
      },
      ...set_input_filters(input_config),
    })
  }
}
