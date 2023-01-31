// import
import { classes } from '@assets'

// export
export default function (active_node_type, add_classes) {
  return `
		${classes[active_node_type]}
		${add_classes ?? ''}
	`
}
