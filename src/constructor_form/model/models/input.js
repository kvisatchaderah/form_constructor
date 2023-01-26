// helpers
import { get_element_model } from 'm_helpers'

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
  get_with_label(window_elem, input_id) {
    return get_element_model('div', { class: 'input_wrapper' }, [
      get_element_model(
        'label',
        {
          for: input_id,
          class: 'input_label',
        },
        [window_elem.name]
      ),
      get_element_model('input', {
        id: input_id,
        placeholder: this.config.styles.placeholders ? window_elem.name : '',
        type: window_elem.type,
        required: window_elem.required,
        class: 'input',
      }),
    ])
  }

  // not label
  get_without_label(window_elem) {
    return get_element_model('input', {
      placeholder: this.config.styles.placeholders ? window_elem.name : '',
      type: window_elem.type,
      required: window_elem.required,
      class: 'input',
    })
  }
}
