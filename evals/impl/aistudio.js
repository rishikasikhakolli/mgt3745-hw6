// Copy the function AI Studio wrote for your EARS row here and export it.
// Record any change you had to make in docs/DDR-002.md.
// Change for export: wrapped in a function that takes { photo, note, place } and maps
// photo -> photoUrl, place -> placeName. Logic itself unchanged.
export function acceptsMoment({ photo, note, place }) {
  const photoUrl = photo;
  const placeName = place;
  const hasPhoto = Boolean(photoUrl && photoUrl.trim());
  const hasNote = Boolean(note && note.trim());
  const hasPlace = Boolean(placeName && placeName.trim());
  const hasAtLeastOne = hasPhoto || hasNote || hasPlace;
  return hasAtLeastOne;
}
