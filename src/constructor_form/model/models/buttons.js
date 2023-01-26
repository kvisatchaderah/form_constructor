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
    this.create = this[`create_to_${this.config.views.mode}_mode`]
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
    this.context.windows_model.value = this.context.windows_model.value.map(
      (window_model, window_index) => {
        // first window
        if (!window_index) {
          return this.get_first_buttons_for_quiz_mode(window_model)
        }

        // last window
        if (window_index === this.context.windows_model.value.length - 1) {
          return this.get_last_buttons_for_quiz_mode(window_model)
        }

        // other windows
        return this.get_standart_buttons_for_quiz_mode(window_model)
      }
    )

    console.log(
      ' this.context.windows_model.value: ',
      this.context.windows_model.value
    )
  }

  // first windows
  get_first_buttons_for_quiz_mode(window_model) {
    window_model.childs.push(
      get_element_model(null, { class: 'button_container' }, [
        get_element_model(
          'button',
          {
            class: 'button --disabled',
          },
          ['prev']
        ),

        get_element_model(
          'button',
          {
            class: 'button',
            class_disabled: '--disabled',
          },
          ['next']
        ),
      ])
    )

    return window_model
  }

  // other windows
  get_standart_buttons_for_quiz_mode(window_model) {
    window_model.childs.push(
      get_element_model(null, { class: 'button_container' }, [
        get_element_model(
          'button',
          {
            class: 'button',
          },
          ['prev']
        ),

        get_element_model(
          'button',
          {
            class: 'button',
            class_disabled: '--disabled',
          },
          ['next']
        ),
      ])
    )

    return window_model
  }

  // last windows
  get_last_buttons_for_quiz_mode(window_model) {
    window_model.childs.push(
      get_element_model(null, { class: 'button_container' }, [
        get_element_model(
          'button',
          {
            class: 'button --submit',
          },
          ['prev']
        ),

        get_element_model(
          'button',
          {
            class: 'button --submit',
            class_disabled: '--disabled',
          },
          ['submit']
        ),
      ])
    )

    return window_model
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
