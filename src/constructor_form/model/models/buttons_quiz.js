// helpers
import {
  get_element_model,
  add_options,
  get_emitter_selector,
} from '@m_helpers'

// assets
import { dynamic_classes } from '@assets'

// Buttons
export default {
  // quiz_mode
  create_to_quiz_mode() {
    this.context.windows_model.value = this.context.windows_model.value.map(
      (window_model, window_index) => {
        window_model.class_active = `
					${window_model.class_active}
					${dynamic_classes.active}
				`

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
  },

  // first windows
  get_first_buttons_for_quiz_mode(window_model) {
    window_model = add_options(window_model, {
      class: dynamic_classes.active,
    })

    const buttons_wrapper = get_element_model(
      null,
      { class: 'button_container --single_button' },
      [
        get_element_model(
          null,
          {
            class: get_emitter_selector('next'),
          },
          ['next']
        ),
      ]
    )
    window_model.childs.push(buttons_wrapper)

    return window_model
  },

  // other windows
  get_standart_buttons_for_quiz_mode(window_model) {
    window_model.childs.push(
      get_element_model(null, { class: 'button_container' }, [
        get_element_model(
          null,
          {
            class: get_emitter_selector('prev'),
          },
          ['prev']
        ),

        get_element_model(
          null,
          {
            class: get_emitter_selector('next'),
          },
          ['next']
        ),
      ])
    )

    return window_model
  },

  // last windows
  get_last_buttons_for_quiz_mode(window_model) {
    window_model.childs.push(
      get_element_model(null, { class: 'button_container' }, [
        get_element_model(
          null,
          {
            class: get_emitter_selector('prev'),
          },
          ['prev']
        ),

        get_element_model(
          null,
          {
            class: get_emitter_selector('submit'),
          },
          ['submit']
        ),
      ])
    )

    return window_model
  },
}
