# post-x-the-agent-builds-a-game-from-20261122-1709-entry

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kikskiks33/post-x-the-agent-builds-a-game-from-20261122-1709-entry/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kikskiks33/post-x-the-agent-builds-a-game-from-20261122-1709-entry/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game, one short video. My AI agent was asked — in a single
prompt — to build a tiny browser game, and this repo is what came out of it:
**Tangkap Bintang** (Catch the Stars). Stars fall from a night sky, you slide
a basket underneath them with the arrow keys, the mouse or a finger. Catch a
star for a point, a golden star for three, dodge the rocks — three lives, and
the sky keeps getting faster.

The video (posted on X, linked in POST.json) shows the prompt, the agent
working, and the finished game running, and ends on make.fun's referral card
with my code `04v2me7y`.

## Run it

```sh
# the game — just open it in a browser, nothing to install
open game.html

# the entry program — copies POST.json to /output
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `game.html` — the whole game: canvas, no libraries, no network.
  `?demo=1&t=5` renders one frozen frame of the real game at 5 seconds in,
  which is how the video's gameplay footage was filmed.
- `main.ts` — copies `POST.json` to `MAKEFUN_OUTPUT_DIR`.
- `POST.json` — the X post's address (placeholder until the video is posted).

---

<sub>Entered on [make.fun](https://make.fun/?ref=04v2me7y&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
