export default function (nodes, target) {
  if (!target) target = document.body
  if (!Array.isArray(nodes)) nodes = [nodes]

  nodes.forEach((node) => target.append(node))
}
