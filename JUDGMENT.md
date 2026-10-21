# JUDGMENT.md

## What Is Being Judged
EARS rows F3-1, F3-2, and F3-3, plus the STYLE.md 14px minimum text size. The code eval (`evals/shared.test.js`) only checks whether the empty-moment logic returns true or false. It can't tell whether a person can see who posted a moment, whether an error message makes sense, or whether the text looks the right size. A person has to look at the running app for those.

## Procedure

1. Read the three F3 EARS rows and the STYLE.md text-size rule in `context/`.
2. Look at the screenshots in `docs/` for each builder.
3. Open the code files listed below for each builder.
4. Answer each question in the Results table Yes or No, using only what you see in the screenshots and files.
5. Answer every question for both builders before comparing.

## Evidence Given to the Second Grader

- `context/FEATURES.md` (F3 rows) and `context/STYLE.md`
- bolt.new: `builds/bolt.zip`, mainly `src/components/AddMomentForm.tsx` and `src/components/MomentCard.tsx`
- AI Studio: `builds/aistudio.zip`, mainly `components/AddMomentModal.tsx`, `components/MomentCard.tsx`, and `App.tsx`
- Screenshots: everything in `docs/` (first screen, F3-1, F3-2, and F3-3 for each builder)

**Second grader:** Google Gemini 3.8 Flash chat with no prior context

## Results

| Item | Question | Me | Gemini |
|---|---|---|---|
| J1 | bolt.new: After adding a moment, can you clearly see who added it? | Yes | Yes |
| J2 | AI Studio: After adding a moment, can you clearly see who added it? | Yes | Yes |
| J3 | bolt.new: Could a save failure happen to a real member using the app normally (not just through a test switch)? | Yes | Yes |
| J4 | AI Studio: Could a save failure happen to a real member using the app normally (not just through a test switch)? | No | No |
| J5 | bolt.new: When an empty moment is refused, does the message tell the member what to add? | Yes | Yes |
| J6 | AI Studio: When an empty moment is refused, does the message tell the member what to add? | Yes | Yes |
| J7 | bolt.new: Is all text at least 14px, as STYLE.md requires? | No | No |
| J8 | AI Studio: Is all text at least 14px, as STYLE.md requires? | Yes | Yes |

**Agreement rate:** <8 of 8, 100%>

## Disagreements
No disagreements. All eight questions asked about something visible in the files or screenshots, so both graders were checking the same evidence. Questions that need more interpretation, such as whether a message "feels" clear, would be more likely to split. Gemini's full answers: [docs/img/gemini-judgment.md](docs/img/gemini-judgment.md)
