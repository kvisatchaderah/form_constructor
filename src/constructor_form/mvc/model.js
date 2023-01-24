// assets
import { init_view_model } from '../assets/_assets'

// helpers
import { get_view_model, get_unic_id } from '../helpers/_helpers'

export default class {
  constructor({ styles, special, views }) {
    // data
    this.view_model = init_view_model

    // config
    this.styles = styles
    this.special = special
    this.views = views

    // init
    this.create_view_model()
  }

  //
  // create_view_model
  //

  // create_view_model
  create_view_model() {
    this.views.windows.forEach((window, window_idx) => {
      const window_model = get_view_model()

      window.forEach((window_elem, window_elem_idx) => {
        // labels
        if (this.styles.labels) {
          const input_model = this.get_has_label_input_model(window_elem, [
            window_idx,
            window_elem_idx,
          ])
          window_model.childs.push(input_model)
        }

        // not labels
        else {
          const input_model = this.get_not_label_input_model(window_elem)
          window_model.childs.push(input_model)
        }
      })

      this.view_model.form.childs.push(window_model)
    })
  }

  get_has_label_input_model(window_elem, [first, second]) {
    return get_view_model('div', null, [
      get_view_model(
        'label',
        {
          for: get_unic_id(first, second),
        },
        [window_elem.name]
      ),
      get_view_model('input', {
        id: get_unic_id(first, second),
        placeholder: window_elem.name,
        type: window_elem.type,
        required: window_elem.required,
      }),
    ])
  }

  get_not_label_input_model(window_elem) {
    return get_view_model('input', {
      name: window_elem.name,
      type: window_elem.type,
      required: window_elem.required,
    })
  }

  // get_veiw_model
  get_veiw_model() {
    return this.view_model
  }
}
