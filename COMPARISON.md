# COMPARISON.md

## Row-by-Row Evidence

Pass, Partial, or Fail, each with one line of evidence (a screenshot, a file and line, or a test result).

<!--| <ID> | <Pass / Partial / Fail> | <evidence> | <Pass / Partial / Fail> | <evidence> |-->
| EARS row | bolt.new | Evidence | AI Studio | Evidence |
|---|---|---|---|---|
| F3-1 | Pass | Moment appears with the typed name ([docs/img/bolt-f3-1.md](docs/img/bolt-f3-1.md)) | Pass | Moment appears labeled with the selected member ([docs/img/aistudio-f3-1.md](docs/img/aistudio-f3-1.md)) |
| F3-2 | Pass | `AddMomentForm.tsx` L81–83: offline save shows an error and keeps the inputs | Partial | `App.tsx` L148: save always returns `true`, so a save only fails with the checkbox tester |
| F3-3 | Pass | `node --test evals/f3-3.test.js`, empty and whitespace-only tests pass | Pass | `node --test evals/f3-3.test.js`, empty and whitespace-only tests pass |

## Scope Creep

| | bolt.new | AI Studio |
|---|---|---|
| Files created or changed that the feature did not need | 0 | 2 (`TestingGuide.tsx`, `SavedPlacesModal.tsx`) |
| Additions the spec excludes (list them) | Login screen in round 1 | Reactions, comments, filters, delete, saved places |

## Judgment Eval

Agreement rate with the second grader: 8 of 8, 100%. Details in [JUDGMENT.md](JUDGMENT.md).

## Findings
**Top error-log row: the builder had to guess something F3 doesn't say.**

- bolt.new (round 1) guessed that members need to log in. It built a login screen, and then posting broke.
- bolt.new (round 2) lets you type any name, so anyone can post as anyone.
- AI Studio lets you pick from a fake list of members, so anyone can post as anyone.
- AI Studio saves moments only in the browser, which never fails, so it faked the F3-2 failure with a checkbox.

F3 never says who the member is or where moments are saved, so the builders differed. F3-1 and F3-3 worked in both builds. The prompt included Profile 3, which F3 doesn’t trace to -- AI Studio built Saved Places for that profile.

## Spec Gaps

Every place where both builders guessed, or guessed differently.

<!--| <gap> | <assumptions> | <proposed row> |-->
| Gap | What each builder assumed | EARS change or exclusion that closes it |
|---|---|---|
| Who the member is | bolt: login (round 1), typed name (round 2). AI Studio: pick from a fake list | F3-1: WHEN a signed-in member submits a moment with at least one of a photo, note, or place, the app shall add it to the trip, labeled with their username. |
| Save fail | bolt: real database that can fail. AI Studio: browser storage that never fails, so it faked it | F3-2: IF the server does not confirm a moment was saved, THEN the app shall tell the member and keep the photo, note, and place on screen so they can try again. |
| Does a review of only spaces count as empty? | Both said yes (same guess) | F3-3: IF a member submits a moment with no photo and a note and place that are blank or only spaces, THEN the app shall refuse and save nothing. |

## Recommendation

### Criteria and Weights (commit before scoring)

| Criterion | Weight (1 to 5) | Why |
|---|---|---|
| EARS rows passed | 5 | The feature has to meet its acceptance criteria. |
| Works from one prompt | 3 | To compare the builders fairly and ensure free tier usage. |
| Follows STYLE.md | 2 | Can fix it later. |

### Scores (commit after the weights)

| Criterion | Weight | bolt.new | AI Studio |
|---|---|---|---|
| EARS rows passed | 5 | 5 | 3 |
| Works from one prompt | 3 | 1 | 5 |
| Follows STYLE.md | 2 | 3 | 5 |
| **Weighted total** | | 34 | 40 |

### Decision

**Use Google AI Studio for F3 in Phase 2, with its storage replaced before anything ships.**

AI Studio scored 40 to bolt's 34. It built the feature from one prompt and followed STYLE.md, while bolt's first run broke on posting and needed a second prompt. bolt passed more EARS rows (3 of 3, against AI Studio's 2 of 3 plus a partial), but on a retry.

Neither builder fits ADR-001, which puts all data in Cloudflare D1 behind our own Worker. bolt saved to Supabase (`src/lib/supabase.ts`), a vendor not in our TOOLS.md, and AI Studio saved to the browser's localStorage (`App.tsx`). Both builds need that rewrite which is why I left it out of the weights.

Choosing AI Studio makes two things harder. First, F3-2 cannot be tested until the storage is moved to the Worker, because localStorage never fails. AI Studio only faked the failure with a test checkbox. Second, its extra features (reactions, comments, filters, delete, and saved places) have to be removed or added to the spec on the record.

## Handoff to the Team

Issue proposing a FEATURES.md change: [<URL>](https://github.com/mehtaaashi05/mgt3745-team-Alpha-/issues/76)
