// helpers
import { get_view_model, get_unic_id } from '@helpers'

// export
export default class {
  // constructor
  constructor(context) {
    this.context = context
    this.windows_model = []

    this.value = null
  }

  //
  // create
  //

  // create
  create() {
    this.create_windows()
    this.create_widget()
  }

  // create_widget
  create_widget() {
    this.value = get_view_model(null, this.get_computed_options('widget'), [
      get_view_model(
        'form',
        this.get_computed_options('widget_form', { class: 'windows' }),
        this.windows_model
      ),
      get_view_model('button', this.get_computed_options('widget_button'), [
        'form button',
      ]),
    ])
  }

  // create_windows
  create_windows() {
    this.context.views.windows.forEach((window, window_idx) => {
      const window_model = get_view_model(
        null,
        this.get_computed_options('window')
      )

      window.forEach((window_elem, window_elem_idx) => {
        // labels
        if (this.context.styles.labels) {
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

      this.windows_model.push(window_model)
    })
  }

  //
  // helpers
  //

  get_computed_options(option_name, add_option = {}) {
    // computed
    const computed_id = `${this.context.special[`${option_name}__ids`]}`

    const computed_class = `${option_name} ${
      this.context.special[`${option_name}__classes`]
    } ${add_option.class ? add_option.class : ''}`

    const computed_class_active = `${
      this.context.special[`${option_name}__class_active`]
    } ${add_option.class_active ? add_option.class_active : ''}`

    // return
    return {
      ...add_option,
      ...{
        id: computed_id,
        class: computed_class,
        class_active: computed_class_active,
      },
    }
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
    return this.value
  }
}
