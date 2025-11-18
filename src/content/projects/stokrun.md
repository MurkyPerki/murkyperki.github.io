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
  The AP cost first made the game to boring, because it was just used for the same moves so i had to adjust the costs and 
  moveset so that it would increase the pace of the game.

- **Keeping client turns and server state in sync**  
  Sometimes the client still thought it was your turn while the server had already switched player turn, espescially when doing
  "illegal' moves. fixig this made me be more strict about where the real game state live.

- **Handling illegal moves clearly**  
  Early om, illegal walls or moves didnt do very much, which felt like it didnt belong, so we had to to make it clear to the player that it was an illegal move and the game didnt just broke.

- **Integrating the leaderboard into an existing server**  
  The server already handled the connections and game states, so when i was implementing the leaderboard it was sometimes tricky
  I had to be careful about when the results are stored and what data gets stored and make it stay in sync.

