# COMPARISON.md

## Row-by-Row Evidence

Pass, Partial, or Fail, each with one line of evidence (a screenshot, a file and line, or a test result).

| EARS row | bolt.new | Evidence | AI Studio | Evidence |
|---|---|---|---|---|
<!--| <ID> | <Pass / Partial / Fail> | <evidence> | <Pass / Partial / Fail> | <evidence> |-->
| F3-1 | Pass | Moment appears with the typed name ([docs/img/bolt-f3-1.md](docs/img/bolt-f3-1.md)) | Pass | Moment appears labeled with the selected member ([docs/img/aistudio-f3-1.md](docs/img/aistudio-f3-1.md)) |
| F3-2 | Pass | `AddMomentForm.tsx` L81–83: offline save shows an error and keeps the inputs | Partial | `App.tsx` L148: save always returns `true`, so a save only fails with the checkbox tester |
| F3-3 | Pass | `node --test evals/f3-3.test.js`, empty and whitespace-only tests pass | Pass | `node --test evals/f3-3.test.js`, empty and whitespace-only tests pass |

## Scope Creep

| | bolt.new | AI Studio |
|---|---|---|
| Files created or changed that the feature did not need | 0 | 2 (`TestingGuide.tsx`, `SavedPlacesModal.tsx`) |
| Additions the spec excludes (list them) | Login screen in round 1 | Reactions, comments, filters, delete, saved places |

## Judgment Eval

Agreement rate with the second grader: <N of M items, %>. Details in [JUDGMENT.md](JUDGMENT.md).

## Findings
**Top error-log row: the builder had to guess something F3 doesn't say.**

- bolt.new (round 1) guessed that members need to log in. It built a login screen, and then posting broke.
- bolt.new (round 2) lets you type any name, so anyone can post as anyone.
- AI Studio lets you pick from a fake list of members, so anyone can post as anyone.
- AI Studio saves moments only in the browser, which never fails, so it faked the F3-2 failure with a checkbox.

F3 never says who the member is or where moments are saved, so the builders differed. F3-1 and F3-3 worked in both builds.

## Spec Gaps

Every place where both builders guessed, or guessed differently.

| Gap | What each builder assumed | EARS change or exclusion that closes it |
|---|---|---|
<!--| <gap> | <assumptions> | <proposed row> |-->
| Who the member is | bolt: login (round 1), typed name (round 2). AI Studio: pick from a fake list | F3-1: WHEN a signed-in member submits a moment with at least one of a photo, note, or place, the app shall add it to the trip, labeled with their username. |
| Save fail | bolt: real database that can fail. AI Studio: browser storage that never fails, so it faked it | F3-2: IF the server does not confirm a moment was saved, THEN the app shall tell the member and keep the photo, note, and place on screen so they can try again. |
| Does a review of only spaces count as empty? | Both said yes (same guess) | F3-3: IF a member submits a moment with no photo and a note and place that are blank or only spaces, THEN the app shall refuse and save nothing. |

## Recommendation

### Criteria and Weights (commit before scoring)

| Criterion | Weight (1 to 5) | Why |
|---|---|---|
<!--| <criterion> | <weight> | <reason> |-->
| EARS rows passed | 5 | The feature has to meet its acceptance criteria. |
<!--| Fit with the team's ADR-001 stack | 4 | Phase 2 builds into the team's chosen architecture. |-->
| Works from one prompt | 3 | To compare the builders fairly and ensure free tier usage. |
| Follows STYLE.md | 2 | Can fix it later. |

### Scores (commit after the weights)

| Criterion | Weight | bolt.new | AI Studio |
|---|---|---|---|
<!--| <criterion> | <weight> | <1 to 5> | <1 to 5> |
| **Weighted total** | | <total> | <total> |-->
| EARS rows passed | 5 | 5 | 3 |
<!--| Fit with ADR-001 stack | 4 | <score> | <score> |-->
| Works from one prompt | 3 | 1 | 5 |
| Follows STYLE.md | 2 | 3 | 5 |
| **Weighted total** | | <34> | <40> |

### Decision

<Which builder your team should use for this feature in Phase 2, why, and at least one thing that gets harder with that choice. Tie the reasoning to your team's ADR-001 stack.>

## Handoff to the Team

Pull request or issue proposing a FEATURES.md change: <URL>
