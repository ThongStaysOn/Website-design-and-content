# Kekspace Game Bible

A web-based game bible for [Kekspace](https://github.com/ThongStaysOn/Kekspace-Pepecoin) — the 2D isometric multiplayer social world powered by Pepecoin. This project has two goals:

1. **Rewrite the content** — Go through the slides from the previous manual attempts, rewrite the copy in proper English with the right tone, and organize everything by section
2. **Build the website** — A single-page scrolling site that presents the game to investors and community

## What's in this repo

```
.
├── site/                    The website (Vite + vanilla HTML/CSS/JS)
├── content/organized/       All manual images, renamed and sorted by section
├── content-editor.html      Tool: go through images 1-by-1, rewrite text, assign sections
├── content-planner.html     Tool: review and edit all written copy for the site
├── art-brief.html           Tool: visual guide for art team — what to crop/create/kill
├── docs/                    Spec, plan, and content mapping docs
└── Kekspace-Pepecoin/       The game repo (cloned for asset reference)
```

## Getting started

### View the website

```bash
cd site
npm install
npm run dev
```

Open http://localhost:5173/

### Work on content

Open these files directly in your browser (no server needed):

- **`content-editor.html`** — The main tool. Shows each slide image with fields for original text, rewritten text, section assignment, status, and notes. Saves to your browser. Export/import JSON to share progress.
- **`content-planner.html`** — All the written copy for the website organized by section. Fields are editable. Cmd+S to save.
- **`art-brief.html`** — Visual guide showing what images need to be cropped, created, or killed.

### Browse the organized images

All 94 slides from the previous manual attempts are in `content/organized/`, sorted by website section:

```
content/organized/
├── 01-hero/           Hero/landing background and cover
├── 02-vision/         "What is Kekspace?" content
├── 03-economy/        Pepecoin, play-to-value, NFTs
├── 04-world/          City overviews and all zone screenshots
├── 05-gameplay/       KekCreator, minigames, quests, HUD
├── 06-events/         Krakening, Halloween, Christmas
├── 07-community/      Community scenes, social posts, billboards
├── 08-roadmap/        Creator API, Epic Store, INK
└── excluded/          Content cut from the game bible scope
```

## The website — 9 sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Hook — logo, tagline, two CTAs |
| 2 | Vision | "What is Kekspace?" — answers it in two paragraphs |
| 3 | Economy | Pepecoin, play-to-value loop, NFT ownership — primary CTA |
| 4 | World | City overview + 8 zone cards + Kekpads teaser |
| 5 | Gameplay | KekCreator, 5 minigames, quests, HUD |
| 6 | Events | Krakening partnership, seasonal events, partner pitch |
| 7 | Community | Gallery, social posts, stats, billboard network |
| 8 | Roadmap | Delivered / In Progress / On the Horizon |
| 9 | Closing | Final CTAs + social links |

## Tone

**Polished but playful.** Professional enough for investors, authentic enough for the community. No glitch/system-error narrative. No fake `.exe` filenames. No "SYSTEM HALTED" flavor text. Clean, confident copy throughout.

## What still needs to be done

### Content (both of us)
- [ ] Go through each slide in `content-editor.html` and rewrite the text
- [ ] Review and finalize copy in `content-planner.html`
- [ ] Provide community stats (player count, members, followers)
- [ ] Provide URLs (Get Pepecoin, Play Now, Discord, Telegram, Twitter/X)
- [ ] Verify Pepecoin origin claims (2016, community-mined, no presale)
- [ ] Confirm feature statuses (what's Live vs Coming Soon vs On the Horizon)

### Art team
- [ ] Crop zone screenshots (remove overlays, borders, character art)
- [ ] Crop minigame screenshots (individual shots from overview pages)
- [ ] Create 5 pixel-art icons for play-to-value diagram (48x48)
- [ ] Create OG image for social sharing (1200x630)
- [ ] Provide final Kekspace logo (transparent PNG)
- [ ] Provide final Pepecoin logo (transparent PNG)

### Website
- [ ] Replace placeholder images with cropped/clean versions
- [ ] Replace placeholder SVG icons with real pixel-art icons
- [ ] Add real URLs to all CTA buttons and social links
- [ ] Add real community stats
- [ ] Final responsive testing
- [ ] Deploy to hosting

## How to collaborate

1. Open `content-editor.html` in your browser
2. Work through images — assign sections, write rewrites, add notes
3. Click **Export** to download your progress as JSON
4. Share the JSON file — the other person clicks **Import** to load it
5. When copy is finalized, we update the website to match
