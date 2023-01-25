export default function (tag, options, childs) {
  return {
    tag: tag ?? null,
    options: options ? { ...options, ...{ future_it_dent__widget: '' } } : {},
    childs: childs ?? [],
  }
}
