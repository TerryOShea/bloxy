export const SIDE_LENGTH = 150;
export const TILE_HEIGHT = 20;

export const START_POS_ZERO = [2, 2];
export const START_POS_ONE = [2, 5];
export const START_POS_TWO = [2, 4];
export const START_POS_THREE = [2, 6];
export const START_POS_FOUR = [14, 2];

export const CAMERA_POS_ZERO = [700, 1100, 1600];
export const CAMERA_POS_ONE = [900, 1100, 1600];
export const CAMERA_POS_TWO = [1000, 1100, 1600];
export const CAMERA_POS_THREE = [1000, 1100, 2000];
export const CAMERA_POS_FOUR = [1000, 1400, 2500];

export const LIGHT_POS_ZERO = [600, 800, 800];
export const LIGHT_POS_ONE = [1000, 800, 700];
export const LIGHT_POS_TWO = [1100, 800, 800];
export const LIGHT_POS_THREE = [800, 800, 800];
export const LIGHT_POS_FOUR = [900, 800, 800];

export const LEVEL_ZERO = [
  ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty"],
  ["empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
  ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal", "normal"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty"]
];

export const LEVEL_ONE = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", { type: "activator", bridgeCoords: [[5, 11], [5, 12]] }, "normal", "empty", "empty", "normal", "goal", "normal"],
  ["normal", "normal", { type: "activator", bridgeCoords: [[5, 5], [5, 6]] }, "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]
];

export const LEVEL_TWO = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"]
];

export const LEVEL_THREE = [
  ["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"],
  ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"],
  ["empty", "empty", "empty", "empty", "empty", "normal", "goal", "normal", "empty", "empty", "fragile", "fragile", "normal", "fragile"],
  ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "fragile", "fragile", "fragile", "fragile"]
];

export const LEVEL_FOUR = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
  ["empty", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", { type: "activator", bridgeCoords: [[2, 6], [2, 7]] }, "normal", "normal", "normal", "normal", "normal", "normal"],
  ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"],
  ["empty", "normal", "normal", { type: "activator", bridgeCoords: [[9, 6], [9, 7]] }, "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "normal", "normal", "normal", { type: "activator", bridgeCoords: [[9, 6], [9, 7]] }, "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", { type: "activator", bridgeCoords: [[9, 6], [9, 7]] }],
  ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal"],
  ["normal", "goal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
];
