// assets
import { init_view_model } from '../assets/_assets'

// helpers
import { get_view_model, get_unic_id } from '../helpers/_helpers'

export default class {
  constructor({ styles, special, views }) {
    // data
    this.view_model = init_view_model
    this.widget_vars = []
    this.unic_data = Math.round(10 ** 6 * Math.random())

    // config
    this.styles = styles
    this.special = special
    this.views = views

    // init
    this.create_view_model()
    this.create_widget_vars()
  }

  //
  // create_view_model
  //

  // create_view_model
  create_view_model() {
    this.views.windows.forEach((window, window_idx) => {
      const window_model = get_view_model(null, {
        class: 'window',
      })

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

      this.view_model.childs[0].childs.push(window_model)
    })
  }

  get_has_label_input_model(window_elem, [first, second]) {
    return get_view_model('div', { class: 'input_wrapper' }, [
      get_view_model(
        'label',
        {
          for: get_unic_id(first, second),
          class: 'input_label',
        },
        [window_elem.name]
      ),
      get_view_model('input', {
        id: get_unic_id(first, second),
        placeholder: window_elem.name,
        type: window_elem.type,
        required: window_elem.required,
        class: 'input',
      }),
    ])
  }

  get_not_label_input_model(window_elem) {
    return get_view_model('input', {
      name: window_elem.name,
      type: window_elem.type,
      required: window_elem.required,
      class: 'input',
    })
  }

  // get_veiw_model
  get_veiw_model() {
    return this.view_model
  }

  //
  // create_widget_vars
  //

  // create_widget_vars
  create_widget_vars() {
    // no_style
    if (this.special.no_style) return

    // background color
    if (this.styles.color_value) {
      this.add_var('background_color', this.styles.color_value)
    } else {
      this.add_var('background_color', this.styles.color_variants)
    }
  }

  // add_var
  add_var(key, value) {
    this.widget_vars.push({
      key: '--' + key,
      value,
    })
  }

  // get_widget_vars
  get_widget_vars() {
    return this.widget_vars
  }
}
