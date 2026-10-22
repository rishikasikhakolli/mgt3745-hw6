# HW6: Two Builders, One Specification

<!--Replace every line in angle brackets. A README that still carries template placeholders loses points.-->

## Feature

**Team repository:** https://github.com/mehtaaashi05/mgt3745-team-Alpha-

**Spec provenance:** copied from commit `5731bf0d1855f2e91fd7387c55fdc8e5633af116` on 2026-10-08

**Feature:** F3 Add a moment to a trip (Must-be)
* F3-1. WHEN a member submits a moment with at least one of a photo, note, or place, the app shall add it to the trip, labeled with the member's name. (probe)
* F3-2. IF a review fails to save, THEN the app shall tell the member and keep the photo, note, and location on screen so they can try again.
* F3-3. IF a member submits a moment with no photo, note, or place, THEN the app shall refuse and add nothing. (probe)

## See It Work

| bolt.new | AI Studio |
|---|---|
| <img width="495" height="428" alt="Screenshot 2026-10-21 at 6 02 13 PM" src="https://github.com/user-attachments/assets/a47300fe-0d11-4060-b0b0-b4c99670d32c" /> | <img width="591" height="497" alt="Screenshot 2026-10-21 at 6 01 49 PM" src="https://github.com/user-attachments/assets/53cad5b7-ddec-4475-a345-ea1dcb3830f9" /> |

## Status

bolt.new satisfied 3 of 3 EARS rows, but only on its second run. The first run on the identical prompt to AI Studio did not work. Google AI Studio satisfied 2 of 3 from one prompt, with F3-2 only partial because it saved to browser storage that never fails. 

## How to Run the Evals

```bash
npm test
```

One shared test file, `evals/shared.test.js`, runs the same five checks against each build's moment-validation function (copied into `evals/impl/bolt.js` and `evals/impl/aistudio.js`).

<img width="540" height="268" alt="Screenshot 2026-10-21 at 6 04 49 PM" src="https://github.com/user-attachments/assets/de54b35d-b6aa-43fb-a02d-1a694a32b9f4" />


## Links

- [EVALS.md](EVALS.md): Prediction Stake and error log
- [COMPARISON.md](COMPARISON.md): evidence, spec gaps, and recommendation
- [JUDGMENT.md](JUDGMENT.md): judgment eval and agreement rate
- [prompts/PROMPT.md](prompts/PROMPT.md): the exact input both builders received
- [builds/](builds/): bolt.zip and aistudio.zip
- [docs/DDR-001.md](docs/DDR-001.md) (bolt.new), [docs/DDR-002.md](docs/DDR-002.md) (AI Studio)
- Team pull request or issue: https://github.com/mehtaaashi05/mgt3745-team-Alpha-/issues/76#issue-5969179650

## Hours

~10 hours total: 1 writing the prompt and predictions, 2 running both builds, 3.5 testing each EARS row and the shared eval, 3.5 writing COMPARISON.md, EVALS.md, JUDGMENT.md, the DDRs, and the team handoff.

## AI Use
- **bolt.new:** Built the F3 app from the shared prompt (two runs). [DDR-001](docs/DDR-001.md)
- **Google AI Studio:** Built the F3 app from the original prompt (one run). [DDR-002](docs/DDR-002.md)
- **Claude (Claude Opus 5.5):** Helped evaluate both builds after they were made. It wrote the shared code eval, helped draft the predictions before either build, calculated the STYLE.md contrast ratios, and drafted text for some files. It did not change either app. [DDR-003](docs/DDR-003.md)
- **Google Gemini (3.8 Flash):** Acted as the second grader for the judgment eval, in a fresh chat with no prior context. Covered in [DDR-001](docs/DDR-001.md), [DDR-002](docs/DDR-002.md), and [JUDGMENT.md](JUDGMENT.md).
