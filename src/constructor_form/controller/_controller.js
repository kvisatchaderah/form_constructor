export default class {
  constructor(model, view) {
    this.model = model
    this.view = view

    // init_constructor
    this.init()
  }

  // init
  init() {
    // view_model
    const view_model = this.model.view_model.get()
    this.view.create_node(view_model)

    // widget_vars
    const widget_vars = this.model.widget_vars.get()
    this.view.add_vars(widget_vars)
  }
}
