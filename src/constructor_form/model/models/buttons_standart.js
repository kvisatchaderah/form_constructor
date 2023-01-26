// helpers
import { get_element_model } from 'm_helpers'

// export
export default {
  // create_to_standart_mode
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
  },
}
