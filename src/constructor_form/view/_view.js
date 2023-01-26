// helpers
import { create_node, add_node } from '@helpers'

// export
export default class {
  constructor() {}

  //
  // create_node
  //

  // create_node
  create_node(view_model) {
    const widget_view = this.create_view(view_model)
    add_node(widget_view)
  }

  // create_view
  create_view(view_model) {
    // need_create
    const need_create = this.get_need_create(view_model)

    // create
    if (need_create) {
      return create_node(view_model.tag, view_model.options, view_model.childs)
    }

    // recursio
    else {
      view_model.childs = view_model.childs.map((child) =>
        this.create_view(child)
      )
      return create_node(view_model.tag, view_model.options, view_model.childs)
    }
  }

  // get_need_create
  get_need_create(view_model) {
    if (!view_model.childs.length) return true

    let only_string_childs = true
    view_model.childs.forEach((child) => {
      if (typeof child !== 'string') {
        only_string_childs = false
      }
    })
    return only_string_childs
  }

  //
  // add vars
  //

  add_vars(widget_vars) {
    widget_vars.forEach(this.add_var)
  }

  add_var(single_var) {
    document
      .querySelector(':root')
      .style.setProperty(single_var.key, single_var.value)
  }
}
