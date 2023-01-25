// helpers
import { get_view_model, get_unic_id } from '@helpers'

// assets
import { init_view_model } from '@assets'

// export
export default class {
  constructor(context) {
    this.context = context
    this.value = init_view_model
  }

  // create_view_model
  create() {
    this.context.views.windows.forEach((window, window_idx) => {
      const window_model = get_view_model(null, {
        class: 'window',
      })

      window.forEach((window_elem, window_elem_idx) => {
        // labels
        if (this.context.styles.labels) {
          const input_model = this.context.view_model.get_has_label_input_model(
            window_elem,
            [window_idx, window_elem_idx]
          )
          window_model.childs.push(input_model)
        }

        // not labels
        else {
          const input_model =
            this.context.view_model.get_not_label_input_model(window_elem)
          window_model.childs.push(input_model)
        }
      })

      this.context.view_model.value.childs[0].childs.push(window_model)
    })
  }

  // get_has_label_input_model
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

  // get_not_label_input_model
  get_not_label_input_model(window_elem) {
    return get_view_model('input', {
      name: window_elem.name,
      type: window_elem.type,
      required: window_elem.required,
      class: 'input',
    })
  }

  // get
  get() {
    return this.context.view_model.value
  }
}
