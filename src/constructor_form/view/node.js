// helpers
import { create_node_element, is_creatable } from '@v_helpers'
import { event_emitter as EventEmitter } from '@helpers'

// class
const NodeClass = class extends EventEmitter {
  // constructor
  constructor() {
    super()
  }

  // create
  create(node_model) {
    const view = this.create_node(node_model)
    this.add_node(view)
  }
}

// mixins
import node_create from './node_create'
import node_emits from './node_emits'

Object.assign(NodeClass.prototype, node_create, node_emits)

// export
export default NodeClass
