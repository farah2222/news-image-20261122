[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/farah2222/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/farah2222/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# The World in One Day — 22 November 2026

One image summing up the world's news of Sunday 22 November 2026, built for the [make.fun "Sum up 22 November's world news in one image" bounty](https://make.fun/bounty/news-image-20261122) ($100 in prizes, free to enter).

The image is a newspaper front page: the date across the top, then six stories from six regions and fields, each with a flat illustration and a short headline label:

| Story | Region / field |
| --- | --- |
| Iran strikes U.S. bases in Kuwait and Bahrain and hits a tanker in the Strait of Hormuz; Gulf tensions spike | Middle East · security |
| A magnitude 6.7 earthquake shakes Peru's Andes, with no damage or casualties immediately reported | Latin America · disaster |
| Mexico captures cartel kingpin "El Chapo Isidro" Meza Flores in Sinaloa | Mexico · security |
| The EU and Indonesia sign a landmark trade deal after ten years of talks, cutting 98.5% of tariffs | Europe / Asia · economy |
| COP31 climate talks deadlock over the fossil-fuel phaseout and run into Sunday | Global · climate |
| A Russian missile strike on Lviv kills two and injures ten | Ukraine · war |

Every story was first reported on 22 November 2026 in some time zone, or happened that day. Sources: ANI, Yle, Reuters via live news wires, and same-day news digests.

The image is an original flat editorial illustration generated for this entry — drawn from the reported stories, not a copy of any news photograph or existing artwork.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to the output directory as `entry.png`. It needs no network and writes the same bytes on every run.
