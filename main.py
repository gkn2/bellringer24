enemy_list: List[Sprite] = []
for i in range(5):
    enemy = sprites.create(img("""
        . . . . .
        . 5 5 5 .
        5 5 5 5 5
        . 5 5 5 .
        . . . . .
    """), SpriteKind.enemy)
    enemy.set_position(20 + i * 25, 20)
    enemy.vy = 20  
    enemy_list.append(enemy)

food_list: List[Sprite] = []
for i in range(5):
    food = sprites.create(img("""
        . . . . .
        . 2 2 2 .
        2 2 2 2 2
        . 2 2 2 .
        . . . . .
    """), SpriteKind.food)
    food.set_position(20 + i * 25, 100)
    food.vy = -20  
    food_list.append(food)


def on_update_interval():
    for enemy in enemy_list:
        enemy.y += 1
    for food in food_list:
        food.y -= 1

game.on_update_interval(100, on_update_interval)