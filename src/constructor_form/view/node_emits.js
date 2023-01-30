// helpers
import { get_dynamic_class } from '@v_helpers'

// export
export default {
  // on_emits
  on_emits() {
    this.set_emmiters_node()
    this.register_emits()
    this.set_targets()
  },

  // set_emmiters_node
  set_emmiters_node() {
    Object.keys(this.emitters).forEach((key) => {
      const selector = this.emitters[key].selector
        .split(' ')
        .map((s) => get_dynamic_class(s))
        .join('')

      this.emitters[key].nodes = document.querySelectorAll(selector)
    })
  },

  // register_emits
  register_emits() {
    Object.keys(this.emitters).forEach((key) => {
      this.emitters[key].nodes.forEach((emitter_node) =>
        emitter_node.addEventListener('click', this[key].bind(this))
      )
    })
  },
}
