// assets
import { widget_data_name } from '@assets'

// export
export default function (s) {
  // simple class name
  if (!s.includes(' ')) {
    return '.' + widget_data_name + '__' + s
  }

  // complex class name
  return s
    .split(' ')
    .map((s_s) => '.' + widget_data_name + '__' + s_s)
    .join('')
}
