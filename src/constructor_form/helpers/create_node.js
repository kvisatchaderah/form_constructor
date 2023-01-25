export default function (tag, props, childs) {
  // init value
  if (!tag) tag = 'div'
  if (!props) props = {}
  if (!childs) childs = []

  //
  // create element
  //

  const element = document.createElement(tag)

  //
  // write props
  //

  Object.keys(props).forEach((key) => {
    // class
    if (key === 'class') {
      props[key].split(' ').forEach((c) => element.classList.add(c))
      return
    }

    // class
    if (key === 'for') {
      element.htmlFor = props[key]
      return
    }

    // general
    else {
      element[key] = props[key]
      element.dataset[key] = props[key]
    }
  })

  //
  // add childs
  //

  childs.forEach((child) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }

    element.appendChild(child)
  })

  // return
  return element
}
