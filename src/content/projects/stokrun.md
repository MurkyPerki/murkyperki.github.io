---
title: Stokrun — Quoridor-like
hasGalleryPlaceholder: true
role: AI & Board Logic
pitch: Grid pathfinding, wall placement, shortest-path constraints.
# cover: "/media/stokrun/cover.jpg"  # Uncomment when you have a cover image
highlights:
  - A* pathfinding
  - State machine AI
  - Custom heuristics
  - Real-time pathfinding
  - Strategic wall placement
  - Turn-based gameplay
links:
  - { label: "GitHub Repo", href: "https://github.com/murkyperki/stokrun" }
media:
  - { label: "Screenshots", href: "https://imgur.com/a/your-album" }
lessons:
  - Heuristic trade-offs vs brute force
  - Balancing AI difficulty
  - Performance optimization for pathfinding
---

Stokrun is a Quoridor-inspired board game where players race to opposite sides while strategically placing walls to block opponents.

## Technical Implementation

I implemented the AI using A* pathfinding with custom heuristics to evaluate both movement and wall placement strategies.

## Challenges

The main challenge was balancing performance with decision quality - brute force search was too slow, so I had to optimize the heuristic functions.
