---
title: Stokrun
hasGalleryPlaceholder: false
role: AI & Board Logic
pitch: "A networked Quoridor-style board game in C# + Node.js where the server enforces that wall placement can never fully block either player's shortest path."
highlights:
  - Turn based online board game (C# client + Node.js server)
  - pathfinding to enforce shortest path & “no blocking” rules
  - Clean board representation and turn/state management
gallery:
  - src: "/stokrun/stokrunArt.png"
    type: "image"
    alt: "Stokrun artwork"
    caption: "Game artwork."
  - src: "/stokrun/bluewiz_correct.png"
    type: "image"
    alt: "Blue wizard character"
    caption: "Blue wizard."
  - src: "/stokrun/redwiz_correct.png"
    type: "image"
    alt: "Red wizard character"
    caption: "Red wizard."
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
  The AP cost first made the game too boring, because it was just used for the same moves, so I had to adjust the costs and moveset to increase the pace of the game.

- **Keeping client turns and server state in sync**  
  Sometimes the client still thought it was your turn while the server had already switched player turn, especially when doing "illegal" moves. Fixing this made me be more strict about where the real game state lives.

- **Handling illegal moves clearly**  
  Early on, illegal walls or moves didn't give much feedback, which felt wrong, so I had to make it clear to the player that a move was illegal and that the game hadn't just broken.

- **Integrating the leaderboard into an existing server**  
  The server already handled connections and game states, so when I was implementing the leaderboard it was sometimes tricky. I had to be careful about when results are stored, what data gets stored, and keeping everything in sync.

