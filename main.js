//=================================================
// Game: NAME HERE
//=================================================

// Setup the game
kaplay({
    width: 800,
    height: 600,
    background: [30, 60, 90],
})

// Load our images before we use them
loadBean()
loadSprite("ghost", "assets/images/ghost.png")

// Add objects to the scene
add([
    sprite("bean"),
    pos(300, 300),
    anchor("center"),
])

add([
    sprite("ghost"),
    pos(500, 300),
    anchor("center"),
])

