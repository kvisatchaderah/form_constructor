// assets
import { widget_data_name } from '@assets'

// export
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
    // string treatment
    if (typeof props[key] === 'string') {
      props[key] = props[key].trim()
    }

    // null values
    if (!props[key]) {
      return
    }

    if (key === 'class') {
      // class
      const classes_list = props[key]
        .replace(/[\t|\r|\n]+/g, ' ')
        .replace(/[\s\s]+/g, ' ')
        .split(' ')
      classes_list.forEach((c) => {
        element.classList.add(widget_data_name + '__' + c)
      })

      return
    }

    // class
    if (key === 'for') {
      element.htmlFor = props[key]
      return
    }

    // data active
    if (key.includes('class_active')) {
      element.setAttribute('data-' + key, props[key])
      return
    }

    // data
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key])
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
