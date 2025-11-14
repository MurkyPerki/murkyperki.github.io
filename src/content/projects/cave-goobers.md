---
title: Cave Goobers
role: Gameplay & Boss Design
pitch: A small 2D platformer prototype in JavaScript/p5.js built around a simple boss fight gated by collecting Goobers.
hasGalleryPlaceholder: false
highlights:
  - Custom-built collision and movement logic
  - Collect 5 Goobers to unlock the boss arena
  - Boss telegraphs attacks by turning red before slamming
  - Damage system based on placing collected Goobers into slots
gallery:
  - src: "/cave-goobers/BossFightTest.png"
    type: "image"
    alt: "Level layout with hitboxes"
    caption: "Platforming layout with hitboxes visualized."
  - src: "/cave-goobers/GamePlayBoss - Made with Clipchamp.mp4"
    type: "video"
    alt: "Gameplay boss fight video"
    caption: "Boss fight gameplay clip."
thumbnailVideo:
  src: "/cave-goobers/GamePlayBoss - Made with Clipchamp.mp4"
  poster: "/cave-goobers/BossFightTest.png"
links:
  - { label: "GitHub Repo", href: "https://github.com/MurkyPerki/Cave-Goobers" }
lessons:
  - Telegraphing attacks makes simple bosses feel fair.
  - Gating a fight behind a small collection loop gives the level structure.
  - Writing my own collision and state logic helped me understand core platformer mechanics.
---

Cave Goobers is a prototype I built in JavaScript/p5.js to practice making a full gameplay loop from scratch.  
You explore a small cave, collect 5 Goobers, and use them to fight a simple boss.

## Gameplay

- Explore the cave and gather 5 Goobers.
- The boss room only opens once you have all of them.
- In the fight, the boss turns red before doing a slam attack.
- You deal damage by placing Goobers into the slots around the arena.
- Using all 5 Goobers defeats the boss.

## What I Built

- Custom collision system (AABB checks, grounding, hazards).
- Collaberated on Player movement.
- Goober collection, and the boss gate logic.
- Boss state machine: idle, telegraph,  slam.
- Slot interaction that consumes Goobers and applies damage.

## Improvements I’d Add Later

- Stronger visual feedback when the boss takes damage.
- Better polish on movement and jump feel.
- Additional boss patterns or a second phase.
