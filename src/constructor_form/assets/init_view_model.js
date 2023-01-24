// helpers
import { get_view_model } from '../helpers/_helpers'

export default {
  // form
  form: get_view_model('form'),

  // form button
  open_form_button: get_view_model('form', null, ['form button']),
}
