# The World in One Day

news-image-20261122 entry — a newspaper front-page image summing up the world's news of 22 November 2026.

## The six stories

1. Iran strikes US bases in Kuwait and Bahrain, and hits a tanker in the Strait of Hormuz
2. A magnitude 6.7 earthquake shakes Peru
3. Mexico captures cartel kingpin "El Chapo Isidro" in Sinaloa
4. The EU and Indonesia sign a landmark trade deal after ten years of talks
5. COP31 climate talks deadlock over the fossil-fuel phaseout
6. A Russian missile strike on Lviv

Every story was first reported on 22 November 2026 in some time zone, or happened that day.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to the output directory. It throws if the image is missing, and checks the copy landed complete by comparing file sizes. It needs no network and writes the same bytes on every run.
