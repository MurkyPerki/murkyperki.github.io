---
title: Features Collection
role: Gameplay & Prototyping
pitch: A small reel of movement, combat, and AI features from unfinished prototypes.
hasGalleryPlaceholder: false
highlights:
  - Player Mass linked to speed and health prototype
  - Enemy AI behaviour prototypes

gallery:
  - src: "/Features-Collection/FirstGroup.mp4"
    type: "video"
    alt: "Dash and air-control prototype"
    caption: "No Enemy collision"
  - src: "/Features-Collection/NotWorkingGroups.mp4"
    type: "video"
    alt: "First iteration of enemy collisions"
    caption: "Enemy behaviour was off made a symetrical pattern"
  - src: "/Features-Collection/Test_SlimeGame.mp4"
    type: "video"
    alt: "Combo system prototype"
    caption: "Slime Game concept losing and gaining mass"
  - src: "/Features-Collection/WorkingGroups.mp4"
    type: "video"
    alt: "Combo system prototype"
    caption: "Working and natural smooth enemy collisions"

thumbnailVideo:
  src: "/Features-Collection/Test_SlimeGame.mp4"
  # poster: "/Features-Collection/features-thumb.png"

lessons:
  - Isolating one mechanic at a time makes it easier to iterate on the feel.
  - Small throwaway prototypes are a good way to test ideas before committing to full projects.
---

This page collects a few gameplay and tech experiments from unfinished projects — enemy group behaviour and a slime character whose mass changes. They’re not full games, but they show how I iterate on a mechanic before building it into something larger.

## Enemy Group Behaviour

The enemy group clips show how I iterated on group movement and collision:

- **FirstGroup** — basic movement without enemy-on-enemy collision; groups just drift together.
- **NotWorkingGroups** — a broken collision attempt that made enemies move in a stiff, symmetrical pattern.
- **WorkingGroups** — refined version where enemies keep spacing and slide around each other naturally.

**How:** Each enemy runs a separation check per frame, applying a push force toward any overlapping neighbour scaled by distance. This keeps groups spread out without stiff snapping or enemies locking together.

## Slime Mass Prototype

The player gains and loses mass, and that mass drives several systems: higher mass means slower movement but more impact and survivability. The character visibly scales with mass so the mechanic is immediately readable.

**How:** Mass is stored as a float. It feeds into `Rigidbody2D.mass` for physics weight, a speed multiplier that scales movement inversely, and `Transform.localScale` for the visual size change.

