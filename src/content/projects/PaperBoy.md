---
title: Paperboy
role: "Gameplay & Systems — Solo Project"
pitch: 2D Unity prototype where a boy is trapped in his own drawing and uses drawn lines to survive and collect 3 balls.
hasGalleryPlaceholder: true
highlights:
  - Two line types; temporary mouse drawn and permanent lines under the player
  - Enemies that chase the player, plus one that erases lines
  - Win by collecting 3 balls; lose on contact with any chaser
gallery:
  - src: "/PaperBoy/PaperBoy-Gameplay.mp4"
    type: "video"
    alt: "PaperBoy gameplay"
    caption: "Gameplay clip you have to catch all 3 balls but dont get caught yourself"
thumbnailVideo:
  src: "/PaperBoy/PaperBoy-Gameplay.mp4"
  # optional: poster image if you have one in /public/PaperBoy/
  # poster: "/PaperBoy/thumbnail.png"
lessons:
  - Simple drawing mechanics become interesting when enemies react to them.
  - Mixing collection (3 balls) with avoiding (chasing characters) creates tension in a small arena.
  - Implementing the line and collision logic in Unity helped me understand 2D physics and triggers better.
---

Paperboy is a personal project I made in Unity to practice C# and building a full game loop.

## What I Built

- Player movement and basic camera setup in Unity.
- Line-drawing system:
  - Mouse based temporary lines with a limited lifetime.
  - World based permanent trail line under the character.
- Collision and triggers between:
  - Player, balls (collect to increase counter and check win).
  - Enemies and lines (blocking / erasing behaviour).
- Win/lose loop:
  - Win when 3 balls are collected.
  - Lose on enemy contact, with restart of the scene.

## Improvements I’d Add Later

- Stronger visual feedback when a line is erased or a ball is collected.
- Clear UI for ball count and a simple start/retry screen.
- Extra enemy types with different reactions to the lines.
