// helpers
import { get_element_model, set_input_filters } from '@m_helpers'

// assets
import { dynamic_classes, filters } from '@assets'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.config = config

    this.set()
  }

  //
  // set get
  //

  // set
  set() {
    this.get_input = this.config.styles.labels
      ? this.get_with_label
      : this.get_without_label
  }

  // get
  get(input_config, input_id) {
    return get_element_model(null, { class: 'input_wrapper' }, [
      this.get_input(input_config, input_id),
      ...this.get_errors(input_config),
    ])
  }

  //
  // label
  //

  // has label
  get_with_label(input_config, input_id) {
    return get_element_model(null, { class: 'label_wrapper' }, [
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
          class: dynamic_classes.input,
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
        class: dynamic_classes.input,
      },
      ...set_input_filters(input_config),
    })
  }

  //
  // errors
  //

  get_errors(input_config) {
    return (
      Object.keys(filters)
        .map((filter_key) => {
          // undefined treatment
          if (!input_config[filter_key]) return false

          // return general
          return get_element_model(
            null,
            {
              class: `
								${dynamic_classes.error}
								${dynamic_classes.error}_${filter_key}
							`,
            },
            [filters[filter_key].error_text(input_config[filter_key])]
          )
        })
        // filter false results
        .filter((v) => v)
    )
  }
}
