import { active_nodes_template } from '@c_assets'

// export
export default class {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.active_nodes = active_nodes_template

    // init
    this.init()
  }

  //
  // init
  //

  init() {
    this.create_node_model()
    this.write_css_vars()
    this.register_emits()
  }

  //
  // node_model
  //

  create_node_model() {
    const node_model = this.model.node.get()
    this.view.node.create(node_model)
  }

  //
  // css_vars
  //

  write_css_vars() {
    const css_vars_model = this.model.css_vars.get()
    this.view.css_vars.add(css_vars_model)
  }

  //
  // emits
  //

  // register_emits
  register_emits() {
    // get_active_nodes
    this.active_nodes = this.view.node.get_active_nodes(this.active_nodes)

    // register emits
    this.view.node.register_emits(this.active_nodes)

    // register callbacks
    this.register_callbacks()
  }

  register_callbacks() {
    Object.keys(this.active_nodes).forEach((key) => {
      this.view.node.on(key, this[`on_${key}`])
    })
  }

  //
  // emit callbacks
  //

  on_submit(a) {
    console.log('on_submit: ', a)
  }

  on_prev(a) {
    console.log('on_prev: ', a)
  }

  on_next(a) {
    console.log('on_next: ', a)
  }

  on_widget_button(a) {
    console.log('on_widget_button: ', a)
  }

  on_tree_label(a) {
    console.log('on_tree_label: ', a)
  }
}
