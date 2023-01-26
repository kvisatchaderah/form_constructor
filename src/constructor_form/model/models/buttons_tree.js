// helpers
import { get_element_model, add_options } from 'm_helpers'

// export
export default {
  // create
  create_to_tree_mode() {
    const buttons_wrapper = get_element_model(
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

    this.context.windows_model.value.push(buttons_wrapper)
  },
}
