# Kekspace Game Bible — Design Spec

## Overview

A web-based game bible for Kekspace, the 2D isometric multiplayer social world powered by Pepecoin. The target audience is investors and community members. The primary CTA is "buy Pepecoin," secondary is "play the game."

## Positioning

**Core message:** The social charm of classic virtual worlds meets real Web3 ownership.

No competitor name-dropping. Let the product speak for itself.

## Tone

Polished but playful. Professional presentation with meme culture authenticity woven in. Not corporate, not shitpost — a real studio that happens to live in the meme space.

No glitch/system-error narrative. No fake stack dumps, `.exe` filenames, or "SYSTEM HALTED" flavor text. Clean, confident copy throughout.

## Design Principles

1. **Narrative flow over information dump** — every section builds toward the CTAs
2. **Show, don't spec** — screenshots and visuals over technical documentation
3. **Retro manual motif, modern execution** — pixel borders, paper textures, blueprint diagrams as design flourishes within a clean scrolling site
4. **Polished but playful** — professional enough for investors, authentic enough for the community
5. **Less is more** — one clean screenshot beats five crammed together. One strong sentence beats a paragraph.
6. **Economy first** — Pepecoin and ownership come before gameplay details, matching the CTA priority

## Format

Single-page scrolling website. The narrative flows top-to-bottom in a controlled sequence designed to build value before asking for action.

Retro game manual design elements are used throughout as a visual motif — pixel borders, worn-paper textures, blueprint-style diagrams, scrapbook photo layouts — without literally being a page-flipper.

## Content Scope

- Live features are presented as the core
- Planned/upcoming features are included and clearly tagged using a consistent vocabulary:
  - **Live** — currently playable
  - **Coming Soon** — actively in development
  - **On the Horizon** — planned, not yet in active development
- No deep technical blockchain jargon (no ERC-721/1155/20 references)
- HUD/interface shown once within Section 5 (Gameplay), cleanly, no redundancy
- Zones consolidated into a visual tour, not 15 individual deep-dives

## Intentionally Omitted

The following topics from the previous manual attempts are not included in this game bible. They are either too granular for an investor audience, redundant with other sections, or better suited for a future player guide:

- **Detailed refining/crafting/enchanting mechanics** — the play-to-value loop (Section 3b) covers the concept; step-by-step crafting recipes are player-guide material
- **Membership system details** — if a membership tier exists and represents a revenue stream, it should be mentioned briefly in Section 3 or 5; the user should confirm whether this is a live feature worth highlighting
- **Individual zone deep-dives** (Potion Store, Seed Store, Portal, Pepe Gallery, Backstreet) — covered by the consolidated zone highlights in Section 4b; not every zone needs its own section
- **Step-by-step HUD walkthroughs** — a single annotated screenshot in Section 5 replaces the multi-page breakdowns
- **Loot box mechanics** — too granular for investors; the NFT ownership narrative in Section 3c covers the value proposition
- **Creator API technical specs** — mentioned in the Roadmap (Section 8) if in development; detailed SDK docs belong in developer documentation
- **Equipment stat systems** (intelligence, utility, elemental damage) — RPG depth is implied by "craft, upgrade, enchant, trade" in Section 3c; full stat breakdowns are player-guide material

## Existing Assets

The previous manual attempts (in `/content/` and `/content/other manual/`) contain usable art assets:
- Isometric zone screenshots
- Character anatomy diagram
- City overview maps (West and East)
- Event screenshots (Krakening crowd, Halloween, Christmas)
- Community gathering screenshots
- Social media post screenshots
- KekCreator interface screenshots
- Minigame screenshots
- Room/furniture screenshots

These will be curated and reused. Writing will be completely redone. Brand assets (logos, fonts, colors) to be provided later by the user.

---

## Section Architecture

### Section 1: Hero / Landing

**Purpose:** Hook in 3 seconds. First impression.

**Content:**
- Full-viewport hero with an isometric game scene (City West or Spawn — the most impressive existing assets)
- Kekspace logo, large and centered
- Single tagline (e.g., "The social world where meme culture meets real ownership")
- Two CTA buttons: "Get Pepecoin" (primary) and "Play Now" (secondary)
- Subtle animated elements to show the world is alive — implemented as looping sprite sheet or GIF animations layered over a static background image (not live-rendered scenes). Examples: characters walking, lights flickering.

**Design notes:**
- Retro manual touch: subtle worn-paper texture or pixel-art border framing the viewport, like opening the cover of a game manual
- No wall of text. Let the art sell the vibe.

---

### Section 2: The Vision — "What is Kekspace?"

**Purpose:** Immediately answer what this is. Establish identity.

**Content:**
- Two-column layout with retro manual page feel
- Left side — 2-3 short paragraphs:
  - **What it is:** A social virtual world powered by Pepecoin where players hang out, play games, collect items, and own everything on-chain
  - **Why it matters:** The charm of classic virtual worlds rebuilt with real digital ownership
  - **Who it's for:** Communities, creators, degens, and curious newcomers
- Right side — curated collage of 3-4 game screenshots (community gathering, character customization, zone interior)

**Design notes:**
- Text block on a slightly off-white "page" with subtle fold/crease, like a manual page laid flat
- Small pixel-art corner decorations

---

### Section 3: The Economy — "Own the Meme"

**Purpose:** The most important section for the primary CTA. Comes early, hits hard.

**Sub-sections:**

**3a: Pepecoin**
- Origin story: first and longest-running Pepe-themed crypto, launched 2016, community-mined, no presale
- Current utility: the currency that powers everything in Kekspace
- Clean visual: Pepecoin logo with "fuel of the world" positioning

**3b: The Play-to-Value Loop**
- Simple visual diagram: Explore > Gather > Craft > Equip or Sell > Mint to own forever
- Copy: "Every action feeds a living economy. Resources become items. Items become NFTs. Progress becomes property."
- Replaces the dense "FromPlayToValue" pages from the old manual with one clean diagram

**3c: NFTs & Digital Ownership**
- Skins, furniture, equipment — all ownable on-chain
- Items can be crafted, upgraded, enchanted, and traded
- Curated item screenshots (best-looking gear, decorated room, character in full drip)
- Aspirational, not technical

**CTA:** "Get Pepecoin" button at bottom of section

**Design notes:**
- Play-to-value diagram styled like a strategy guide flowchart from an old SNES manual — pixel arrows, icon labels, clean paths

---

### Section 4: The World — "Step Into the Grid"

**Purpose:** Visual tour showing the world is big and alive. Consolidated, not fragmented.

**Sub-sections:**

**4a: World Overview**
- Large isometric city map visual (City West and/or City East spreads)
- Intro copy: "A sprawling pixel world of shops, nightclubs, secret alleys, and places the community is still discovering."

**4b: Zone Highlights**
- Grid or horizontal scroll of 6-8 standout zones, each with one clean screenshot, a name, and a one-liner:
  - **Spawn** — where everyone arrives
  - **Arcade Saloon** — games and tickets
  - **Amplexus** — the nightclub
  - **Kekmart** — shopping
  - **Adventure Guild** — quests and lore
  - **Cemetery / Kekmaze** — the dark and mysterious side
  - **GM Coffee** — the social hangout
  - **Touch Grass Park** — the chill zone

**4c: Kekpads (teased)**
- Brief mention: players can own and customize private rooms
- One screenshot of a well-decorated room
- Tagged as "Live" or "Expanding"

**Design notes:**
- Zone grid styled like a map legend from an old RPG strategy guide — labeled thumbnails with page-number-style references

---

### Section 5: Gameplay — "More Than Just Hanging Out"

**Purpose:** Show depth. After seeing the world, prove there's real stuff to do.

**Sub-sections:**

**5a: KekCreator — Character Creation**
- Anatomy diagram showing all customization slots (hat, hair, pet, glasses, shirt, pants, shoes, etc.) — reuse existing asset, it's strong
- Copy: "Thousands of combinations. Every slot is a layer. Every layer is a statement."
- 1-2 screenshots of different character looks
- Mention that skins can be NFTs

**5b: Minigames**
- Horizontal row of minigame cards with small screenshot and name:
  - Survivor — wave-based top-down shooter
  - Frog Bowling — classic lanes
  - Whack-A-Meme — tap and smash
  - Pokek — on-chain poker (tagged "Coming Soon" if not live)
  - Fishing — cast, catch, collect
- One line: "Every game earns tickets. Tickets earn rewards. Rewards have real value."

**5c: Quests & Progression**
- Quest system, NPCs with missions, Adventurer's Book
- Ranking/badges as progression hook
- Framed around: "The more you play, the more you earn, the higher you climb"

**5d: Interface (HUD)**
- One clean annotated screenshot of the game interface
- Label key elements: player info, chat, navigation, action bar, settings
- Keep it brief — this shows investors the game is polished and functional, not a tutorial

**Design notes:**
- Minigame cards styled like cartridge labels or arcade cabinet marquees
- KekCreator anatomy diagram keeps its labeled-blueprint style

---

### Section 6: Events & Partnerships — "Proof It Works"

**Purpose:** Social proof for investors. Real brands, real turnout.

**Sub-sections:**

**6a: The Krakening (Kraken Partnership)**
- Lead with the massive crowd screenshot
- Key beats: real brand embedded natively, hundreds of players in real-time, exclusive collectibles still traded, ticket rain mechanic
- Positioning line: "Not a banner ad. A living brand experience inside a living world."

**6b: Seasonal Events**
- Side-by-side or carousel: Halloween and Christmas 2025
  - Halloween: maze, costumes, cursed candies, themed quests
  - Christmas: advent calendar, daily gifts, world transformation
- Copy: "The world transforms with the seasons. New quests, exclusive loot, and reasons to come back."

**6c: The Pitch**
- Investor-facing callout: "Kekspace turns brand partnerships into interactive experiences players actually want. If your brand has a community, we can put them in the world."
- Soft CTA for potential partners

**Design notes:**
- Event screenshots framed like collectible trading cards — bordered, titled, "limited edition" stamp on Krakening exclusives

---

### Section 7: Community — "Built by the People in It"

**Purpose:** Final social proof. Real people, real activity.

**Sub-sections:**

**7a: Community Scenes**
- Curated gallery of 4-6 real community screenshots — crowd gatherings, group photos, organic moments
- Minimal captions — images speak for themselves
- Should feel candid, not staged

**7b: Social Presence**
- Real social media posts displayed as styled screenshots (not live embeds — avoids third-party script dependencies and layout instability)
- Community stats section: player count, community size, social followers — hardcoded numbers updated manually per release. User to provide current figures.
- Copy: "A community that shows up, stays loud, and keeps building."

**7c: Billboard Network (light touch)**
- Brief mention of in-game billboard network for brands and creators
- Positioned as a revenue/engagement layer, not a deep dive
- One screenshot, tagged with appropriate maturity label (Live / Coming Soon / On the Horizon)

**Design notes:**
- Gallery styled like a yearbook/scrapbook — slightly tilted screenshots, tape-corner effects, handwritten-style captions

---

### Section 8: Roadmap — "What's Next"

**Purpose:** Show momentum and direction without overpromising.

**Content:**
- Simple vertical timeline with three tiers:
  - **Delivered** (checkmarked) — core world, KekCreator, minigames, NFT inventory, wallet integration, Kraken partnership, seasonal events
  - **In Progress** — Fishing, Pokek, Creator API, equipment crafting/refining (whatever is actively in development)
  - **On the Horizon** — Kekpads expansion, more brand partnerships, Epic Games Store launch, INK tool
- Each item: name + one sentence max
- No dates unless confident
- Confidence line: "Every feature listed above is either live or in active development. No vapor. No empty roadmaps."

**Design notes:**
- Styled like an RPG quest progression path — checkpoints connected by a dotted trail, completed items with gold star/checkmark, upcoming items faded or with lock icon

---

### Section 9: Closing — CTAs

**Purpose:** Convert. Everything above built the case.

**Content:**
- Bold headline: "The world is live. The economy is real. The community is growing."
- Two prominent buttons:
  - "Get Pepecoin" — primary, large
  - "Play Kekspace" — secondary
- Row of social links: Discord, Telegram, Twitter/X
- Optional small "Partner with us" text link

**Design notes:**
- Styled like the back cover of a game manual — logo centered, tagline, "where to find us" info at the bottom. Clean and confident.

---

## Navigation

- Sticky header with logo (small) and section links that smooth-scroll to each section
- On mobile: hamburger menu with the same section links
- Optional: subtle scroll progress indicator (thin bar at top of viewport)
- Navigation labels should be short: Vision / Economy / World / Gameplay / Events / Community / Roadmap

## Technical Notes

| Concern | Decision |
|---------|----------|
| **Stack** | HTML/CSS/JS — framework TBD during implementation planning. No CMS requirement. Static hosting preferred (e.g., Vercel, Netlify, GitHub Pages). |
| **Responsive** | Must look good on desktop and mobile. Sections reflow to single-column on mobile. |
| **Assets** | Existing pixel art from previous manual attempts. Images served as optimized WebP with PNG fallback. Lazy-loaded below the fold. |
| **Brand assets** | Logos, fonts, colors to be provided by user during implementation. |
| **Animations** | Sprite sheet / GIF-based, layered over static backgrounds. Parallax scrolling on desktop. Reduced motion for `prefers-reduced-motion`. |
| **Hosting** | TBD — static hosting preferred. |
| **SEO / Social** | Page title, meta description, Open Graph tags, and Twitter Card meta required. These determine how the page appears when shared in Discord, Telegram, and Twitter — the primary channels for this audience. Favicon required. |
| **Accessibility** | Alt text on all images. Sufficient color contrast for text. Keyboard-navigable. Semantic HTML headings for screen readers. |
| **Pepecoin origin claims** | Copy states "first and longest-running Pepe-themed crypto, launched 2016, community-mined, no presale." User to verify and provide canonical source before publishing. |
