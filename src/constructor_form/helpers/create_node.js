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
      props[key].split(' ').forEach((c) => {
        if (c) element.classList.add(c.trim())
      })
      return
    }

    // class
    if (key === 'for') {
      if (typeof props[key] === 'string') {
        element.htmlFor = props[key].trim()
      } else {
        element.htmlFor = props[key]
      }

      return
    }

    // general
    else {
      if (typeof props[key] === 'string') {
        element[key] = props[key].trim()
        element.dataset[key] = props[key].trim()
      } else {
        element[key] = props[key]
        element.dataset[key] = props[key]
      }
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
