// assets
import { classes } from '@assets'

// helpers
import { get_element_model } from '@m_helpers'

// Buttons
export default {
  // next
  get_button_next_model() {
    return get_element_model(
      null,
      {
        class: `
					${classes.next}
					--${this.config.styles.button_variant}
				`,
        disable_classes: classes.disable,
      },
      ['Дальше']
    )
  },

  // prev
  get_button_prev_model() {
    return get_element_model(
      null,
      {
        class: `
					${classes.prev}
					--${this.config.styles.button_variant}
				`,
      },
      ['Назад']
    )
  },

  // submit
  get_button_submit_model() {
    return get_element_model(
      null,
      {
        class: `
					${classes.submit}
					--${this.config.styles.button_variant}
				`,
        disable_classes: classes.disable,
      },
      ['Отправить']
    )
  },
}
