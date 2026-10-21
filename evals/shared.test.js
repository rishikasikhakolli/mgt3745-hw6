// One test, run against both builds, so they face an identical check.
// Replace the example with the EARS row you chose. Keep both builds in the loop.
// EARS rows tested: F3-3 (refuse an empty moment) and F3-1 (accept a moment with at least one item).
import { test } from "node:test";
import assert from "node:assert/strict";
import * as bolt from "./impl/bolt.js";
import * as aistudio from "./impl/aistudio.js";

const builds = { bolt, aistudio };

for (const [name, impl] of Object.entries(builds)) {
  test(`${name}: F3-3 refuses a moment with no photo, note, or place`, () => {
    assert.equal(impl.acceptsMoment({ photo: "", note: "", place: "" }), false);
  });
  test(`${name}: F3-3 refuses whitespace-only note and place`, () => {
    assert.equal(impl.acceptsMoment({ photo: "", note: "   ", place: "  " }), false);
  });
  test(`${name}: F3-1 accepts a note alone`, () => {
    assert.equal(impl.acceptsMoment({ photo: "", note: "Sunset at the pier", place: "" }), true);
  });
  test(`${name}: F3-1 accepts a place alone`, () => {
    assert.equal(impl.acceptsMoment({ photo: "", note: "", place: "Lion Cafe" }), true);
  });
  test(`${name}: F3-1 accepts a photo alone`, () => {
    assert.equal(impl.acceptsMoment({ photo: "beach.jpg", note: "", place: "" }), true);
  });
}
