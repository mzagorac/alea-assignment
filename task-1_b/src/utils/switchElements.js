// Function switch position of element in the array "arr" from "fromIndex" to "toIndex"
export function switchElements(arr, fromIndex, toIndex) {
  const copy = [...arr];
  const value = copy.splice(fromIndex, 1);

  // If "toIndex" is undefined element is pushed at the end
  if (!toIndex) {
    copy.push(value[0]);
  } else copy.splice(toIndex, 0, value[0]);
  return copy;
}
