// export
export default class {
  constructor(model, view) {
    this.model = model
    this.view = view

    // init
    this.init()
  }

  //
  // init
  //

  init() {
    this.create_node_model()
    this.write_css_vars()
    this.on_emits()
  }

  //
  // node_model
  //

  create_node_model() {
    this.model.node.create()
    const node_model = this.model.node.get()
    this.view.node.create(node_model)
  }

  //
  // css_vars
  //

  write_css_vars() {
    this.model.css_vars.create()
    const css_vars_model = this.model.css_vars.get()
    this.view.css_vars.add(css_vars_model)
  }

  //
  // emits
  //

  // on_emitsy
  on_emits() {
    this.view.node.on_emits()
  }
}
