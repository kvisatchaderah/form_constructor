// helpers
import { get_view_model, get_unic_id } from '@helpers'

// assets
import widget_data_name from '../assets/widget_data_name'

// export
export default class {
  constructor(context) {
    this.context = context
    this.value = null
  }

  // create_view_model
  create() {
    this.context.view_model.create_widget()
    this.context.view_model.create_windows()
  }

  // create_widget
  create_widget() {
    this.context.view_model.value = get_view_model(
      null,
      {
        id: `${widget_data_name} ${this.context.special.widget_ids}`,
        class: `widget ${this.context.special.widget_classes}`,
        class_active: this.context.special.widget_class__active,
      },
      [
        get_view_model('form', {
          id: this.context.special.form_ids,
          class: `widget__form windows ${this.context.special.form_classes}`,
          class_active: this.context.special.form_class__active,
        }),
        get_view_model(
          'button',
          {
            id: this.context.special.widget_button_ids,
            class: `widget__button ${this.context.special.widget_button_classes}`,
            class_active: this.context.special.widget_button_class__active,
          },
          ['form button']
        ),
      ]
    )
  }

  // create_windows
  create_windows() {
    this.context.views.windows.forEach((window, window_idx) => {
      const window_model = get_view_model(null, {
        id: this.context.special.window_ids,
        class: `window ${this.context.special.window_classes}`,
        class_active: this.context.special.window_class__active,
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
