export default function (tag, props, childs = []) {
  // create element
  const element = document.createElement(tag)

  // write props
  Object.keys(props).forEach((key) => {
    element[key] = props[key]
    element.dataset[key] = props[key]
  })

  // add childs
  childs.forEach((child) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }

    element.appendChild(child)
  })

  // return
  return element
}
