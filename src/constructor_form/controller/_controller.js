// export
export default class {
  constructor(model, view) {
    this.model = model
    this.view = view

    // init
    this.init()
  }

  // init
  init() {
    // view_model
    const node_model = this.model.node.get()
    this.view.node.create(node_model)

    // widget_vars
    const model_css_vars = this.model.css_vars.get()
    this.view.css_vars.add(model_css_vars)
  }
}
