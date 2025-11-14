---
title: Facility Map
hasGalleryPlaceholder: true
role: Level Designer
pitch: Interactive industrial map with navigation
highlights:
  - Paper prototyped layout exploring player navigation
  - Full greybox created with Unity ProBuilder
  - Currently adding textures, prefabs, and interactive elements
gallery:
  - src: "/FacilityMap/FacilityMap.mp4"
    type: "video"
    alt: "Facility map interaction"
    caption: "Overview of the interactive facility map."

thumbnailVideo:
  src: "/FacilityMap/FacilityMap.mp4"
  # optional poster frame if you have a PNG/JPG in /public/FacilityMap
  # poster: "/FacilityMap/FacilityMap-thumb.png"
links:
  - { label: "Live Demo", href: "https://your-demo-url.com" }
media:
  - { label: "Trailer", href: "https://youtube.com/..." }
---

The Facility Map is a level design project built to explore how players move through a space and understand where to go.  
I started with paper prototypes to quickly test room connections, flow, and how readable the layout was on paper before committing to 3D.

From there, I built a full greybox using Unity’s ProBuilder package. This let me test scale, pacing, and line of sight directly in the engine, and make fast changes when something felt off.

Right now, the project is in the iteration and polish phase.  
I’m working on:

- **adding** textures to test mood and readability  
- **creating** clean, reusable prefabs for walls, doors, and props  
- **building** interactive elements like animated doors and map components  

The goal is to create a facility layout that feels intuitive to explore, supports clear navigation, and can be used as a foundation for future gameplay systems.

## What I Learned

- Paper prototyping is really handy for catching layout problems early.  
- Greyboxing helps test scale and flow in a way that you wouldnt be able to on paper.  
- Small adjustments to room size, door placement, and sightlines can significantly change how a space feels.  
- Using ProBuilder meant i kept everything in engine and changes are easy.

## Next Steps

- Add final textures, lighting passes, clearer visual landmarks and PSX-style renderer.  
- Build more interactive elements such as UI indicators, animated Walls, and simple triggers.  
- Introduce basic gameplay elements like puzzles and key elements. 
- Create a polished walkthrough of the level as part of the portfolio demo.
