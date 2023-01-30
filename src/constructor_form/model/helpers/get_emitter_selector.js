// import
import { emitters } from '@assets'

// export
export default function (active_node_type, add_classes) {
  return `
		${emitters[active_node_type].classes}
		${emitters[active_node_type].selector}
		${add_classes ?? ''}
	`
}
