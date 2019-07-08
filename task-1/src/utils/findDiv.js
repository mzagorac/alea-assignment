export function findDiv(element) {
  if (element.id) return element;
  return findDiv(element["parentNode"]);
}
