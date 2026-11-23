# AGENT.md — the agent builds a game from one prompt

## The job
Make a short video about an AI coding agent building a tiny browser game
from one prompt while you watch, and hand in the X post that carries it.

## The one prompt
> Buatkan game browser kecil: tangkap bintang yang jatuh dengan keranjang,
> pakai panah kiri-kanan atau mouse. Makin lama makin cepat, ada skor dan
> nyawa.

## What got built
- **Tangkap Bintang** (`game.html`): one self-contained HTML file, canvas,
  no libraries, no network. Stars fall, the basket catches them, golden
  stars are worth 3, rocks cost a life, 3 lives, speed ramps with level.
  `?demo=1&t=N` replays the game deterministically to second N — that is
  how the gameplay footage was filmed, in a real headless browser.
- **The video** (16:9, 1920x1080, ~38 s): the prompt on screen, the agent
  working, the finished game running, then make.fun's referral end card
  (16:9, from the press pack, used as-is) with referral code `04v2me7y`,
  and an Indonesian voiceover. Rendered with ffmpeg in this session;
  the file lives outside the repo at
  `~/workspace/makefun/post-x-the-agent-builds-a-game-from-20261122-1709-work/post-x-video.mp4`.
- **main.ts**: copies `POST.json` to `MAKEFUN_OUTPUT_DIR`. That is all it does.
- **POST.json**: placeholder until the video is posted on X; the real post
  URL goes in after that.

## Why this creative
A game about catching stars is the fastest thing a viewer understands in
three seconds, and it films well: bright stars on a dark sky, a basket
that visibly chases them, a score that visibly climbs. The video keeps
moving — prompt, work, result, card — and ends on the game running, which
is what the brief asks for.

## Checks
- `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
  then `out/POST.json` must equal `POST.json`.
- Game footage: headless Chromium screenshots of `game.html?demo=1&t=N`.
