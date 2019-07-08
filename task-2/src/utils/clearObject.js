// Function removes unused properties from object
export function clearObject(obj) {
  let copy = { ...obj, phone: { ...obj.phone } };
  for (let i in copy) {
    if (i === "phone") {
      if (!copy.phone.ext && !copy.phone.number) {
        delete copy.phone;
        continue;
      }

      for (let j in copy.phone) {
        if (!copy.phone[j]) delete copy.phone[j];
      }
    }
    if (!copy[i]) delete copy[i];
  }
  return copy;
}
