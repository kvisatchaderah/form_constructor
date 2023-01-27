// import
import { active_nodes_template } from '@c_assets'

// export
export default function (active_node_type, add_classes) {
  return `
		${active_nodes_template[active_node_type].selector}
		${add_classes ?? ''}
	`
}
