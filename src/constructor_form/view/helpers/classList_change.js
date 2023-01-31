// helpers
import { get_dynamic_class } from '@v_helpers'

// export
export default function (node, method = 'toggle', type = 'class_active') {
  const active_classes = node.dataset[type]

  // simple active class
  if (!active_classes.includes(' ')) {
    node.classList[method](get_dynamic_class(active_classes, true))
    return
  }

  // multy active class
  active_classes.split(' ').forEach((active_class) => {
    node.classList[method](get_dynamic_class(active_class, true))
  })
}
