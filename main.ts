enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.vy = -70
    number_of_jumps += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, player1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
function idle_bobbing () {
    anim = animation.createAnimation(ActionKind.Idle, 1000)
    animation.runMovementAnimation(
    player1,
    animation.animationPresets(animation.bobbing),
    200,
    true
    )
}
let moving = false
let anim: animation.Animation = null
let rubbish2: Sprite = null
let rubbish1: Sprite = null
let player1: Sprite = null
player1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........fff22fff........
    .......fff2222fff.......
    ......fffeeeeeefff......
    ......ffe222222eef......
    ......fe2ffffff2ef......
    ......ffffeeeeffff......
    .....ffefbf44fbfeff.....
    .....fee41fddf14eef.....
    ......feeddddddeef......
    .....fffee4444eef.......
    ....fdfef222222f4e......
    ....fbf4f222222fd4......
    ....fbf.f445544f44......
    ....fcf..ffffff.........
    .....ff..ff..ff.........
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.setBackgroundImage(assets.image`Beach1`)
tiles.setTilemap(tilemap`level3`)
story.spriteSayText(player1, "Let's clean up some beaches!")
player1.setStayInScreen(true)
player1.setPosition(15, 75)
player1.ay = 150
let max_jumps = 2
let number_of_jumps = 0
controller.moveSprite(player1, 100, 0)
scene.cameraFollowSprite(player1)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    rubbish1 = sprites.create(img`
        ........................
        ........................
        .........fffff..........
        ........fccaaaf.........
        ........fccfaaf.........
        .....fffffffffffff......
        ....fccccabbbbbbbbf.....
        .....fffffffffffff......
        .....faafaafaafaaf......
        .....faafaafaafaaf......
        .....fbafaafaafaaf......
        .....fbbfbafaafaaf......
        .....fbbfbbfbafaaf......
        .....fbbfbbfbbfbaf......
        .....fbbfbbfbbfbbf......
        .....fbbfbbfbbfbbf......
        .....fcbfbbfbbfbbf......
        .....fccfcbfbbfbbf......
        .....fccfccfcbfbbf......
        .....fccfccfccfcbf......
        .....fccfccfccfccf......
        .....fccfccfccfccf......
        ......fffffffffff.......
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(rubbish1, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    rubbish2 = sprites.create(img`
        ....................................
        ....................................
        ...............fbbbff...............
        ...............bfbfbb...............
        ...............ffbbbf...............
        ...............ffffbf...............
        ................fffb................
        ...............ffffffff.............
        .............fffcbbbbbf.............
        ............fffccbbbbbbf............
        ..........ffffcccbbbfffbf...........
        ........fffcccccbbbbbbbfbf..........
        .......ffccccccbbbbbbbbbfbf.........
        ......ffcccccbbbbbbbbbbbbfbf........
        .....ffcccccbbbbbbbbbbbbbffbf.......
        .....fcccccbbbbbbbbbbbbbffbbbf......
        ....ffccccbbbbbbbbbbbbbffbbbbbf.....
        ...ffccccbbbbbbbbbbbbbbbbbbbbbbf....
        ..ffcccccbbbbbbbbbbbbbbbbbbbbbbbf...
        ..fccccccbbbbbbbbbbbbbbbbbbbbbbbf...
        ..fccccccbbbbbbbbbbbbbbbbbbbbbbbf...
        .ffccccccbbbbbbbbbbbbbbbbbbbbbbbf...
        .ffccccccbbbbbbbbbbbbbbbbbbbbbbbf...
        .ffccccccbbbbbbbbbbbbbbbbbbbbbbbf...
        .ffccccccbbbbbbbbbbbbbbbbbbbbbbbf...
        .ffccccccbbbbbbbbbbbbbbbbbbbbbbbf...
        ..fccccccbbbbbbbbbbbbbbbbbbbbbbff...
        ..ffcccccbbbbbbbbbbbbbbbbbbbbbbf....
        ...fccccbbbbbbbbbbbbbbbbbbbbbbff....
        ...fccccbbbbbbbbbbbbbbbbbbbbbff.....
        ...ffcccbbbbbbbbbbbbbbbbbbbfff......
        ....ffccbbbbbbbbbbbbbbbbbbbf........
        .....ffcbbbbbbbbbbbbbbbbbbff........
        .......ffbbbbbbbbbbbbbbbbbf.........
        ........fffffffffffffffffff.........
        ....................................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(rubbish2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    moving = controller.left.isPressed() || controller.right.isPressed()
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, player1)
    }
})
game.onUpdateInterval(5000, function () {
	
})
game.onUpdateInterval(1000, function () {
	
})
