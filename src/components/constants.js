export const SIDE_LENGTH = 150;

const Level = (startPosition, cameraPosition, lightPosition, board) => ({
    startPosition: startPosition,
    cameraPosition: cameraPosition,
    lightPosition: lightPosition,
    board: board
});

const Position3D = (x, y, z) => ({
    x: x,
    y: y,
    z: z
});

const LEVEL_ZERO = Level(
    [2, 2],
    Position3D(700, 1100, 1600),
    Position3D(600, 800, 800), [
        ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty"],
        ["empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty"]
    ]
);

const LEVEL_ONE = Level(
    [2, 5],
    Position3D(900, 1100, 1600),
    Position3D(1000, 800, 700), [
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", { type: "activator", bridgeCoords: [[5, 11], [5, 12]] }, "normal", "empty", "empty", "normal", "goal", "normal"],
        ["normal", "normal", { type: "activator", bridgeCoords: [[5, 5], [5, 6]] }, "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]
    ]
);

const LEVEL_TWO = Level(
    [2, 4],
    Position3D(1000, 1100, 1600),
    Position3D(1100, 800, 800), [
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"]
    ]
);

const LEVEL_THREE = Level(
    [2, 6],
    Position3D(1000, 1100, 2000),
    Position3D(800, 800, 800), [
        ["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"],
        ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "goal", "normal", "empty", "empty", "fragile", "fragile", "normal", "fragile"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "fragile", "fragile", "fragile", "fragile"]
    ]
);

const LEVEL_FOUR = Level(
    [14, 2],
    Position3D(1000, 1400, 2500),
    Position3D(900, 800, 800), [
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
    ]
);

const LEVEL_FIVE = Level(
    [1, 4],
    Position3D(1000, 1400, 2500),
    Position3D(900, 800, 800), [
        ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"],
        ["empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]
    ]
);

export const LEVELS = [
    LEVEL_ZERO,
    LEVEL_ONE,
    LEVEL_TWO,
    LEVEL_THREE,
    LEVEL_FOUR,
    LEVEL_FIVE 
];
