---
title: Stokrun
hasGalleryPlaceholder: true
role: AI & Board Logic
pitch: Grid pathfinding, wall placement, shortest-path constraints.
highlights:
  - Turn based online board game (C# client + Node.js server)
  - pathfinding to enforce shortest path & “no blocking” rules
  - Clean board representation and turn/state management
links:
  - { label: "GitHub Repo", href: "https://github.com/murkyperki/stokrun" }
lessons:
  - How to model a board game so rules stay clear in code
  - Keeping client and server logic in sync in a networked game
---

Stokkie Run is a Quoridor inspired board game where two players race to the opposite side of a grid while placing walls to slow each other down.  
You can’t just block the board completely every move and wall placement must still leave at least one open path for both players.

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

- **Balancing the AP system**  
  At first the AP costs either made turns too short and boring (always the same move), or too long and slow to watch. I had to tweak costs and limits a few times so players had real choices each turn without dragging the pace down.

- **Keeping client turns and server state in sync**  
  Sometimes the client thought it was still your turn while the server had already switched players, especially when a move or wall placement was rejected. Fixing this forced me to be strict about where the “real” game state lives and to always trust the server.

- **Handling illegal moves clearly**  
  Early on, illegal walls or moves just “did nothing”, which felt like a bug. I had to improve how the client reacts to rejections from the server so it’s clear to the player that the move was invalid, not that the game broke.

- **Integrating the leaderboard into an existing server**  
  The server already handled connections and game state, so adding the leaderboard without breaking anything was tricky. I had to be careful about when results are stored, what data gets saved, and how it stays in sync with the end of a match.

