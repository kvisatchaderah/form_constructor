// assets
import { emitters_template, targets_template } from '@assets'

// class
const NodeClass = class {
  // constructor
  constructor() {
    this.emitters = emitters_template
    this.targets = targets_template
    this.active_window = 0
  }

  // create
  create(node_model) {
    const view = this.create_node(node_model)
    this.add_node(view)
  }
}

// mixins
import node_create from './node_create'
import node_targets from './node_targets'
import node_emits from './node_emits'
import node_emits_methods from './node_emits_methods'

Object.assign(
  NodeClass.prototype,
  node_create,
  node_targets,
  node_emits,
  node_emits_methods
)

// export
export default NodeClass
