// assets
import { widget_data_name } from '@assets'

// export
export default function (tag, options, childs) {
  return {
    tag: tag ?? null,
    options: options
      ? {
          ...options,
          ...{ [widget_data_name]: '' },
        }
      : {},
    childs: childs ?? [],
  }
}
