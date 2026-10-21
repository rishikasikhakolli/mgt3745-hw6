# EVALS.md

## Prediction Stake
*The prediction stake was first committed by mistake to `context/EVALS.md` instead of this file, in commit `705bd88` on 2026-10-13 before either builder was opened. This file's commit is later because the predictions were copied here afterward, word for word. The original is left in `context/EVALS.md` so the earlier commit can be checked.*

### Tight (a count)
bolt.new and Google Studio will satisfy 2 of 3 EARS rows Google AI Studio will satisfy 2 of 3 because F3-1 and F3-3 are form behaviors. F3-2 needs a save that can actually fail, and the spec never says what saving means, so I expect both builders to simply store pictures/reviews in the browser.

**Resolution (2026-10-20):** AI Studio: 2 of 3, as predicted. It stored moments in the browser and only faked F3-2 with a test checkbox. bolt.new: the first run on the identical prompt failed F3-1 because posting errored; the second run, with one added sentence, satisfied 3 of 3 because it saved to a real database where a save can fail.

### Loose (a direction with a reason)
bolt.new will create more files that F3 does not need than Google AI Studio will, because in HW5 bolt.new rebuilt the whole app on its own stack instead of staying inside the requested change.

**Resolution (2026-10-20):** Wrong. bolt.new created 0 unneeded files. AI Studio created 2 (`TestingGuide.tsx`, `SavedPlacesModal.tsx`) and added reactions, comments, filters, and delete. Bolt.new behaved differently when building from scratch versus in HW5.

### Open (a question the builds can answer)
Will either builder treat F3-2's "review" and "location" as the same thing as F3-1's "moment" and "place," or will it create separate fields for them?

**Resolution (2026-10-20):** Both treated them as the same fields and neither created a separate review or location field.

## Error Log

Most frequent first. Your top row is the first finding in COMPARISON.md.
<!--| <what went wrong> | <bolt / AI Studio / both> | <count> | <ID> | <file and line, screenshot, or test> |-->
| Error | Builder | Frequency | EARS row | Evidence |
|---|---|---|---|---|
| Guessed something F3 doesn't say (login, who the member is, where moments save, how a save fails) | both | 4 | F3-1, F3-2 | bolt `AddMomentForm.tsx` free-text name input; AI Studio `App.tsx` `handleAddMoment` always returns `true` |
| Added features F3 didn't ask for | both | 2 | None | AI Studio `TestingGuide.tsx`, `SavedPlacesModal.tsx`; bolt round-1 login screen |
| Text smaller than the 14px minimum | bolt | 1 | None (STYLE.md) | `MomentCard.tsx` and `TripHeader.tsx` use `text-xs` (12px) |
| Repeated the old word "review" | AI Studio | 1 | F3-2 | `AddMomentModal.tsx` catch block: "Review failed to save" |
