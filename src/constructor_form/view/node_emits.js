// assets
import { widget_data_name } from '@assets'

// export
export default {
  // on_emits
  on_emits() {
    this.set_emmiters_node()
    this.register_emits()
  },

  // set_emmiters_node
  set_emmiters_node() {
    Object.keys(this.emitters).forEach((key) => {
      const selector = this.emitters[key].selector
        .split(' ')
        .map((s) => '.' + widget_data_name + '__' + s)
        .join('')

      this.emitters[key].nodes = document.querySelectorAll(selector)
    })
  },

  // register_emits
  register_emits() {
    Object.keys(this.emitters).forEach((key) => {
      this.emitters[key].nodes.forEach((emitter_node) =>
        emitter_node.addEventListener('click', this[key])
      )
    })
  },
}
