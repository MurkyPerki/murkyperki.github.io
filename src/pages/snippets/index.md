---
layout: ../../layouts/Layout.astro
title: Code Snippets & Techniques — Max Burkhardt
---

# Code Snippets & Techniques

A place to break down how I implemented specific gameplay features, with code and notes.

## CaveGoobers, Ranged Wind Enemy

```javascript
// Ranged enemy that shoots a wind projectile toward the player
class WindEnemy extends Enemy {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.windRange = 500;
    this.windCooldown = 120;
    this.lastAttack = 0;
    this.projectileSpeed = 5;
  }

  update(player) {
    super.update(player);
    // if the player is in range and not on cooldown shoot at player
    if (frameCount - this.lastAttack > this.windCooldown && this.isPlayerInRange(player)) {
      this.shootWindProjectile(player);
      this.lastAttack = frameCount;
    }
  }

  isPlayerInRange(player) {
    let distToPlayer = dist(this.x, this.y, player.x, player.y);
    return distToPlayer <= this.windRange;
  }

  shootWindProjectile(player) {
    // dir to player + spawn projectile
    let direction = createVector(player.x - this.x, player.y - this.y).normalize();
    direction.mult(this.projectileSpeed);

    let projectile = new WindProjectile(
      this.x + this.width/2, this.y + this.height/2,
      direction.x, direction.y, 20, 20
    );
    entityManager.projectiles.push(projectile);
  }
}
```

### Explanation: 

In 'Cave Goobers', the `WindEnemy` class extends a base enemy to include a ranged attack. It checks time from time 
if the player is not within its range, if the player is it shoots a wind projectile towards the players position.
The code calculates a normalized vector that points from the enemy towards the player and uses that to spawn a new `WindProjectile` moving it in that direction.

If the projectile hits the player, it pushes the player by adding to the players velocity, which looks like a knockback force.
this shows simple AI behaviour with a cooldown timer using `frameCount` to make sure it doesnt fire continuously.

-------------------------------------


## PaperBoy, Dynamic Line Drawing Mechanic

```csharp
// make the player able to draw temp line with mouse
if (!drawingLine) {
    cooldownTimer -= Time.deltaTime;
    if (Input.GetMouseButtonDown(0) && cooldownTimer <= 0f) {
        StartDrawing(); 
    }
} else {
    if (Input.GetMouseButton(0)) { // keep the line going to the next point
        Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        AddPoint(mousePos);  
    } else { // mouse released
        
        drawingLine = false;
        cooldownTimer = cooldownTime;
    }
}
// add points at a fixed rate and update phyisics collider
void AddPoint(Vector2 point) {
    if (Vector2.Distance(point, lastPoint) > segmentLength) {
        linePoints.Add(point);
        lineRenderer.positionCount = linePoints.Count;
        lineRenderer.SetPositions(linePoints.ToArray());
        edgeCollider.points = linePoints.ToArray();  
}
void UpdateLineSegments() {
    // Fade out and remove old line segments over after timer passes
    float now = Time.time;
    for (int i = lineSegments.Count - 1; i >= 0; i--) {
        float age = now - lineSegments[i].startTime;
        if (age >= fadeSpeed) {
            Destroy(lineSegments[i].segmentObject);
            lineSegments.RemoveAt(i);
        } else {
            float alpha = 1f - (age / fadeSpeed);
            lineSegments[i].segmentRenderer.startColor = new Color(1,1,1, alpha);
            lineSegments[i].segmentRenderer.endColor   = new Color(1,1,1, alpha);
        }
    }
}
```


### Explanation:

this code from PaperBoy make the player able to temporary lines with the mouse on the screen.
the lines act like barriers to the NPC. when the player presses the mouse button `StartDrawing()` creates a new line 
object which uses a `LineRenderer` for visuals and for the `EdgeCollider` for the collision physics. As the player drags the mouse while pressing `AddPoint()` is called to add new points to the line and updating the renderers vertices and collider.


A cooldown `cooldownTime` make sure you cant instantly make another line after you finished drawing a line. making sure you cant spam it. every segment of the line is set so it fades out and destroys it self after a certain amount of time `fadeSpeed`. 
in `UpdateLineSegment` you can see the the alpha of the line colour gets less over time untill the part/segment is destroyed.
this mechanic shows custom input handeling, dynamic object creation and the use of Unity's `LineRenderer` + `EdgeCollider2D` to realise a interactive drawing gameplay feature.

------------------------------


## PaperBoy, NPC State Machine (Fleeing Behavior)

```csharp
enum State { Wandering, AvoidingWall, RunningFromPlayer }
State currentState = State.Wandering;

void Update() {
    switch (currentState) {
        case State.Wandering:
            // walk in random dir
            rb.velocity = currentDirection * moveSpeed;
            if (Time.time > nextDirectionChange) ChangeDirection();
            // if player is close flee
            if (Vector2.Distance(player.position, transform.position) < detectionRadius) {
                ChangeState(State.RunningFromPlayer);
            }
            break;

        case State.RunningFromPlayer:
            // run opposite side of player
            Vector2 awayDir = (transform.position - player.position).normalized;
            rb.velocity = awayDir * moveSpeed;
            break;

        case State.AvoidingWall:
            // get away from wall, so they dont get stuck
            rb.velocity = lastWallNormal * moveSpeed;
            if (Time.time - wallAvoidanceStart > wallAvoidanceTime) {
                ChangeState(State.Wandering);
            }
            break;
    }
}

void OnCollisionEnter2D(Collision2D coll) {
    if (((1 << coll.gameObject.layer) & wallLayer) != 0) { 
        lastWallNormal = coll.contacts[0].normal;
        wallAvoidanceStart = Time.time;
        ChangeState(State.AvoidingWall);
    }
}
```

### Explanation

In PaperBoy, The ball NPC have a fleeing AI state based behaviour. ive difined three different states
wandering, running from the player, and avoiding the walls so they dont get stuck.
In wandering the npc walks in a random direction and changing its direction once every so often.
if the player comes withing the radius of the ball NPC, the NPC switches to the RunningFromPlayer, It then
calculates a new vector that points in the oppistite direction of the player.
if it collides with a wall, the `OnCollisionEnter2D` gets triggerd and then switches to the AvoidingWall state.
it will then move away from the wall for a bit and then switch back to wandering state.

this finite statemachine makes the NPC behaviour more believable but more importantly more challenging. It walks around 
on its own and flees when threatend by the player, also it avoids getting stuck on walls. (add state diagram)