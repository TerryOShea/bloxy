export const SIDE_LENGTH = 150;
export const TILE_HEIGHT = 20;

export const START_POS_ONE = [2, 2];
export const START_POS_TWO = [1, 1];
export const START_POS_THREE = [1, 1];
export const START_POS_FOUR = [1, 1];
export const START_POS_FIVE = [1, 1];

export const LEVEL_ONE = [
  ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty"],
  ["empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
  ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal", "normal"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty"]
];

export const LEVEL_TWO = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
  ["normal", "normal", "activator", "normal", "empty", "empty", "normal", "normal", "activator", "normal", "empty", "empty", "normal", "goal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]
];

export const LEVEL_THREE = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "empty", "empty"],
  ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"]
];

export const LEVEL_FOUR = [
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

export const LEVEL_FIVE = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
  ["empty", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "activator", "normal", "normal", "normal", "normal", "normal", "normal"],
  ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"],
  ["empty", "normal", "normal", "activator", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "normal", "normal", "normal", "activator", "normal", "bridge", "bridge", "normal", "normal", "normal", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "activator"],
  ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal"],
  ["normal", "goal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"]
  ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
];
