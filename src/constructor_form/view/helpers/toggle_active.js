// helpers
import { get_dynamic_class } from '@v_helpers'

// export
export default function (node) {
  const active_classes = node.dataset.class_active
  console.log('active_classes: ', active_classes)

  // simple active class
  if (!active_classes.includes(' ')) {
    node.classList.toggle(active_classes)
  }

  // multy active class
  active_classes.split(' ').forEach((active_class) => {
    console.log('active_class: ', active_class)
    node.classList.toggle(get_dynamic_class(active_class, true))
  })
}
