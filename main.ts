let i: number;
let enemy: Sprite;
let food: Sprite;
let enemy_list : Sprite[] = []
for (i = 0; i < 5; i++) {
    enemy = sprites.create(img`
        . . . . .
        . 5 5 5 .
        5 5 5 5 5
        . 5 5 5 .
        . . . . .
    `, SpriteKind.Enemy)
    enemy.setPosition(20 + i * 25, 20)
    enemy.vy = 20
    enemy_list.push(enemy)
}
let food_list : Sprite[] = []
for (i = 0; i < 5; i++) {
    food = sprites.create(img`
        . . . . .
        . 2 2 2 .
        2 2 2 2 2
        . 2 2 2 .
        . . . . .
    `, SpriteKind.Food)
    food.setPosition(20 + i * 25, 100)
    food.vy = -20
    food_list.push(food)
}
game.onUpdateInterval(100, function on_update_interval() {
    for (let enemy of enemy_list) {
        enemy.y += 1
    }
    for (let food of food_list) {
        food.y -= 1
    }
})
