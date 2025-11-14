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
  - Isolating one mechanic at a time makes it easier to iterate on feel.
  - Small throwaway prototypes are a good way to test ideas before committing to full projects.
---

This page collects a few gameplay and tech experiments from unfinished projects things like enemy behaviour, and a slime character that changes mass etc. 
They’re not full games on their own, but they show how I iterate on mechanics before building them into something larger.

## Enemy Group Behaviour

The enemy group clips show how I iterated on **group movement and collision**:

- **FirstGroup** basic movement without enemy on enemy collision, just groups drifting together.
- **NotWorkingGroups** a broken collision attempt that made enemies move in a stiff, symmetrical way.
- **WorkingGroups** a refined version where enemies keep spacing, slide around each other, and feel more natural.

## Slime Mass Prototype

In the slime prototype, the player can gain and lose mass, and that mass is linked to speed
the heavier means slower movement bit more impact. Health survivability, more mass gives more room for
mistakes.
Size and visual, the character visibly scales with mass so the machanic is readable

