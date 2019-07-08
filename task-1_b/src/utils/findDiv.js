// Function serach for the dom element with an id attribute
// starting with 'element' argument and up the dom tree
// (from parentNode to parentNode)
export function findDiv(element) {
  if (element.id) return element;
  return findDiv(element["parentNode"]);
}
