// helpers
import { create_node_element, is_creatable } from 'v_helpers'

// export
export default class {
  constructor() {}

  // create
  create(node_model) {
    const view = this.create_node(node_model)
    this.add_node(view)
  }

  // create_node
  create_node(node_model) {
    // create
    if (is_creatable(node_model)) {
      return create_node_element(
        node_model.tag,
        node_model.options,
        node_model.childs
      )
    }

    // recursio
    else {
      node_model.childs = node_model.childs.map((child) =>
        this.create_node(child)
      )
      return create_node_element(
        node_model.tag,
        node_model.options,
        node_model.childs
      )
    }
  }

  // add_node
  add_node(nodes, target) {
    if (!target) target = document.body
    if (!Array.isArray(nodes)) nodes = [nodes]

    nodes.forEach((node) => target.append(node))
  }
}
