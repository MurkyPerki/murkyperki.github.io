---
title: Stokrun — Quoridor-like
hasGalleryPlaceholder: true
role: AI & Board Logic
pitch: Grid pathfinding, wall placement, shortest-path constraints.
highlights:
  - Turn-based online board game (C# client + Node.js server)
  - A* pathfinding to enforce shortest path & “no blocking” rules
  - Clean board representation and turn/state management
links:
  - { label: "GitHub Repo", href: "https://github.com/murkyperki/stokrun" }
media:
  - { label: "Screenshots", href: "https://imgur.com/a/your-album" }
lessons:
  - How to model a board game so rules stay clear in code
  - Keeping client and server logic in sync in a networked game
---

Stokkie Run is a Quoridor-inspired board game where two players race to the opposite side of a grid while placing walls to slow each other down.  
You can’t just block the board completely: every move and wall placement must still leave at least one valid path for both players.

The game runs as a C# client (MonoGame) that connects to a Node.js server, which keeps the real game state and validates the rules.


## What I Worked On in More Detail

- Turn and AP logic in C# (MonoGame).
- Updating the UI/state so players can see:
  - how many AP they have left,
  - when their turn is over,
  - when control switches to the other player.
- Integrating client actions with the server:
  - sending moves and wall placements,
  - reacting to accepted/rejected actions from the server.

## Challenges

The main challenge was balancing performance with decision quality - brute force search was too slow, so I had to optimize the heuristic functions.
