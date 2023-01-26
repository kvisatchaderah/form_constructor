// helpers
import { get_element_model } from 'm_helpers'

// export
export default class {
  // constructor
  constructor(context, config) {
    this.value = []
    this.context = context
    this.config = config

    this.set_create_method()
  }

  //
  // set_create_method
  //

  set_create_method() {
    // standart mode
    if (this.config.views.mode === 'standart') {
      this.create = this.create_to_standart_mode
      return
    }

    // quiz mode
    if (this.config.views.mode === 'quiz') {
      this.create = this.create_to_quiz_mode
      return
    }

    // tree mode
    if (this.config.views.mode === 'tree') {
      this.create = this.create_to_tree_mode
      return
    }
  }

  //
  // standart
  //

  create_to_standart_mode() {
    const buttons_model = get_element_model(
      null,
      { class: 'button_container --single_button' },
      [
        get_element_model(
          'button',
          {
            class: 'button --submit',
            class_disabled: '--disabled',
          },
          ['submit']
        ),
      ]
    )

    this.context.windows_model.value[0].childs.push(buttons_model)
  }

  //
  // quiz_mode
  //

  create_to_quiz_mode() {
    this.windows_model = this.windows_model.map(
      (window_model, window_index) => {
        // first window
        if (!window_index) {
          return this.create_first_buttons_for_quiz_mode()
        }

        // last window
        if (window_index === this.windows_model.length - 1) {
          return this.create_last_buttons_for_quiz_mode()
        }

        // other windows
        return this.create_standart_buttons_for_quiz_mode()
      }
    )
  }

  // create_first_buttons_for_quiz_mode
  create_first_buttons_for_quiz_mode() {
    return ''
  }

  // create_last_buttons_for_quiz_mode
  create_last_buttons_for_quiz_mode() {
    return ''
  }

  // other windows
  create_standart_buttons_for_quiz_mode() {
    return ''
  }

  //
  // tree_mode
  //

  create_to_tree_mode() {}

  //
  // get
  //

  get() {
    return this.value
  }
}
