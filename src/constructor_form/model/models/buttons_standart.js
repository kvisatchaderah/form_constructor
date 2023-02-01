// helpers
import { get_element_model, get_classes } from '@m_helpers'

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
            class: get_classes('submit'),
          },
          ['Отправить']
        ),
      ]
    )

    this.context.windows_model.get()[0].childs.push(buttons_model)
  },
}
