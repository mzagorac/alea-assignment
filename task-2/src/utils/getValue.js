export function getValue(inputName, inputValue, info) {
  if (inputValue) return inputValue;
  if (inputName && inputName.startsWith("phone")) {
    const phone = inputName.split(".");
    return info["phone"][phone[1]];
  }
  return info[inputName];
}
