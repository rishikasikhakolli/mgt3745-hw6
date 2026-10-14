# PROMPT.md

<!--The exact text both builders received, unchanged between them. Paste it below.-->

Build a working web app that implements the feature below, meeting every acceptance criterion and following the user profiles and style rules provided.

**Feature:** Add a moment to a trip
* WHEN a member submits a moment with at least one of a photo, note, or place, the app shall add it to the trip, labeled with the member's name.
* IF a review fails to save, THEN the app shall tell the member and keep the photo, note, and location on screen so they can try again.
* IF a member submits a moment with no photo, note, or place, THEN the app shall refuse and add nothing.

**Users:**
1. Context. Full-time working professional who travels casually [known]. Shares trip moments by texting friends directly, many times a day while traveling, instead of posting to social media [known]. Sends photos, short stories, and places he loved, in the moment [known]. Likes knowing what his friends are up to too [known]. Has little patience for long reviews or blogging [assumed]. Source: Rishika, INT-01. Job statement. When something funny or worth remembering happens on a trip, I want to share it with my friends right away without the pressure of a public post, so I can bring them along on what I am doing. Success looks like. His friends on the trip and at home see the moment the same day, and it stays together with the rest of the trip instead of scattered across text threads [assumed]. His friends can respond without feeling pressured to reply to every message [assumed].
2. Context. Active Instagram and TikTok user who posts trip highlights to her story often [known]. Thinks about what to photograph for posting while she travels [known]. Looks up popular activities and meals on social media when planning [known]. Cares about how her feed looks and takes deliberate, polished photos [known]. Wants to share her trip in more depth than a short caption allows [assumed]. Source: Rishika, INT-02. Job statement. When I am exploring a new place, I want to find the spots worth going to and document them, so I can share a trip I am proud of. Success looks like. She can show a finished trip with more said about each place than a caption holds [assumed]. People who see it can use it to plan their own trips [assumed].
3. Context. Picks up new things socially rather than from algorithms: through friends, shared sessions, and social posts, without asking for recommendations directly [known, from music]. Trusts recommendations from people whose taste he already knows [known, from music]. Uses community threads to find niche things when friends don't have the answer [known, from music]. His frustration is finding and organizing what he has already found, not the quality of suggestions [known, from music]. That he finds trip ideas the same way he finds music is [assumed]: every travel claim in this profile is a transfer from music research and has not been tested. Source: Semaj, Interview 1 and Interview 2. Job statement. When I want to find somewhere new to go, I want it to come from a real person whose taste I already trust, so I can go without second-guessing whether it is for me. Success looks like. He finds a trip from someone he follows, saves the places from it, and can find them again when he plans his own trip [assumed].

**Style:**
* color-primary: "#DD2A7B"
* color-accent: "#00C853"
* color-background: "#FFFFFF"
* color-text: "#1A1A1A"
* font-body: "Roboto"
* font-heading: "Georgia"
* font-size-min: 14px
* space-unit: 8px
* radius: 4px

- **color-primary**: Bright colors draws eyes directly to buttons and unread Story rings so key actions pop against the plain background. Most of Instagram's demographic appreciate pops of color and are enthralled by it.
- **color-accent**: The green is used for different things highlighted (close friends). In addition, the blue of @ mentions pops against the black text more commonly seen.
- **color-background**: A plain white canvas keeps every photo the loudest thing on the page, the way Instagram's feed never competes with its own chrome.
- **color-text**: Near-black instead of pure black is easier to read for long review paragraphs without feeling harsh.
- **font-body**: The body text is very clean and easy to read, no fluff.
- **font-heading**: A serif heading gives the app a slightly more editorial, travel-journal feel than the sans-serif body text, without pulling in an extra font file to load.
- **font-size-min**: Text is legible to most people, it is probably a uniform studied size that is appropriate for the general audience.
- **space-unit**: Margins and grid spacing is all uniform.
- **radius**: Soft corners feel calmer and more casual than sharp edges, matching a travel-diary tone instead of a business one.

---

## Retries

<Builder, what you cut, and why. One retry per builder, and record it in that builder's DDR. Leave "None" if there were none.>
