---
# Tokens: what a machine reads.
color-primary: "#DD2A7B"
color-accent: "#00C853"
color-background: "#FFFFFF"
color-text: "#1A1A1A"
font-body: "Roboto"
font-heading: "Georgia"
font-size-min: 14px
space-unit: 8px
radius: 4px
---

# STYLE.md
*Tokens are identical to the Style section of PROMPT.md. The rationale was rewritten after the builds with no token changed.*
Tokens above, rationale below. The frontmatter is what a machine reads; this
body is what a human reads. One sentence per token. "Looks clean" is fog;
"gold fails contrast on white at body size" is at altitude.

## Rationale

- **color-primary**: Pink marks the main actions, like "Add moment," so they stand out from photos. It is for buttons and large text, not small body text.
- **color-accent**: Green marks places and highlights only. It is never used for text on its own.
- **color-background**: White keeps each photo the most noticeable thing on the page.
- **color-text**: Near-black so notes stay easy to read without the harshness of pure black.
- **font-body**: Roboto stays readable at 14px on phones, where members add moments.
- **font-heading**: Georgia gives trip titles a travel-journal feel and is already on most devices, so there is no extra font to download.
- **font-size-min**: 14px is the smallest text so timestamps and labels stay readable on a phone.
- **space-unit**: Every gap is a multiple of 8px, so the form and the feed line up.
- **radius**: 4px corners feel casual like a travel diary without looking like a toy.

## Refusals

Things this interface will never do, and why. Taken from the interface you
resent. Name the Law of UX it breaks (lawsofux.com).

1. No modal interrupts an entry submission. It breaks the Law of UX: User Control by adding a decision the user did not request.
2. No decorative animation delays the directory list. It breaks the Law of UX: Doherty Threshold by making a simple result feel slower.

## Sources

- Admired: GOV.UK forms, for direct labels and restrained spacing.
- Resented: notification-heavy social feeds, for interrupting a focused task with competing prompts.
