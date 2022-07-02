export function isEmpty(value) {
  return (
    value == null ||
    value.length === 0 ||
    value == undefined ||
    (value != null && typeof value == 'object' && !Object.keys(value).length)
  );
}
