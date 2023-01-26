// export
export default class {
  // add vars
  add(widget_vars) {
    widget_vars.forEach(this.add_var)
  }

  // add_var
  add_var(single_var) {
    document
      .querySelector(':root')
      .style.setProperty(single_var.key, single_var.value)
  }
}
