// helpers
import { get_view_model } from '../helpers/_helpers'

export default get_view_model(null, { class: 'widget' }, [
  get_view_model('form', { class: 'widget__form windows' }),
  get_view_model('button', { class: 'widget__button' }, ['form button']),
])
