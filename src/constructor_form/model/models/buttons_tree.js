// helpers
import { get_element_model, get_classes } from '@m_helpers'

// export
export default {
  // create
  create_to_tree_mode() {
    const buttons_wrapper = get_element_model(
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

    this.context.windows_model.value.push(buttons_wrapper)
  },
}
