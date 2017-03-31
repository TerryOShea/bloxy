## Bloxy

A 3D block manipulation game.
Play it [here](https://terryoshea.github.io/bloxy/).

![gameplay](assets/bloxy_gameplay.gif)

### Instructions
Maneuver the block using your keyboard's arrow keys. The goal of each level is
to get the block to fall into the square hole. Fall off the edge of the board
first and the level resets. Some levels feature bridges (de/activated by buttons
the block must hit) and/or fragile tiles (which the block can only roll across--
if the block is upright, the tile breaks and the block falls into oblivion).

### Technologies and Libraries
Bloxy is built in plain JavaScript with the Three.js library for three-dimensional
rendering and Webpack for bundling.

### Implementation Details
The game is built using four classes: `Block`, `Tile`, `Board` (made up of tiles),
and `Game`.

One challenge I ran into was having the block drop onto each new board from above
and drop down into the void when it fell off the board, all while disabling the
player's block-roll capabilities until the block landed or the level reset. I
wrote the dropBlock function to address it:

```javascript
dropBlock(targetHeight) {
  if (this.block.height() > targetHeight) {
    requestAnimationFrame(() => this.dropBlock(targetHeight));
    this.block.drop();
    this.block.addBlockToScene();
    this.renderer.render(this.scene, this.camera);
  } else {
    this.listenKeydown(); // event listeners
  }
}
```

If the block hasn't reached its target height yet, the dropBlock function is called
recursively (using requestAnimationFrame), the block drops incrementally and the
scene re-renders. If the block has reached that target height, the recursion stops
and the event listeners are added back into allow the player to maneuver the block.

### Expansion
There are many more features to be added to the game in the coming months:
 - [ ] More levels, especially harder levels.
 - [ ] More realistic rolling animation for the block.
 - [ ] Different types of bridge activation buttons--some only work when the block
 stands vertically on the button, some only activate bridges, some only deactivate
 bridges.
