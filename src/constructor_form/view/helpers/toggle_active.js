// export
export default function (node) {
  const active_classes = node.dataset.class_active

  // simple active class
  if (!active_classes.includes(' ')) {
    node.classList.toggle(active_classes)
  }

  // multy active class
  active_classes
    .split(' ')
    .forEach((active_class) => node.classList.toggle(active_class))
}
