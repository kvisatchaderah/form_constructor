// export
export default {
  // get_active_nodes
  get_active_nodes(active_nodes) {
    Object.keys(active_nodes).forEach((key) => {
      const selector = active_nodes[key].selector
        .split(' ')
        .map((s) => '.' + s)
        .join('')

      active_nodes[key].nodes = document.querySelectorAll(selector)
    })

    return active_nodes
  },

  // register_emits
  register_emits(active_nodes) {
    Object.keys(active_nodes).forEach((key) => {
      active_nodes[key].nodes.forEach((active_node) =>
        active_node.addEventListener('click', (event) => {
          this.emit(key, event)
        })
      )
    })
  },
}
