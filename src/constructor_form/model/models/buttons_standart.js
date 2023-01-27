// helpers
import { get_element_model, get_button_classes } from '@m_helpers'

// export
export default {
  // create_to_standart_mode
  create_to_standart_mode() {
    const buttons_model = get_element_model(
      null,
      { class: 'button_container --single_button' },
      [
        get_element_model(
          null,
          {
            class: get_button_classes('submit'),
            class_disabled: '--disabled',
          },
          ['submit']
        ),
      ]
    )

    this.context.windows_model.value[0].childs.push(buttons_model)
  },
}
