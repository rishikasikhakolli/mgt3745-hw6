// Copy the function bolt.new wrote for your EARS row here and export it.
// Record any change you had to make in docs/DDR-001.md.
// Change for export: wrapped the expression in a function that takes { photo, note, place }
// and returns !isEmpty (true = the form will submit). Logic itself unchanged.
export function acceptsMoment({ photo, note, place }) {
  const isEmpty = !photo && !note.trim() && !place.trim();
  return !isEmpty;
}
