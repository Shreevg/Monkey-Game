//Global Variables

var monkey, banana, stone, jungle, monkeyMove, banana1, stone1, bg1, jungleBG, edges, monkeyFlag, bananaFlag, stoneFlag


function preload() {

  monkeyMove = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")

  banana1 = loadImage("Banana.png")

  stone1 = loadImage("stone.png")

  bg1 = loadImage("jungle.jpg")

}


function setup() {
  createCanvas(600, 300);

  edges = createEdgeSprites()

  monkeyFlag = 0

  bananaFlag = 0

  stoneFlag = 0

  jungleBG = createSprite(300, 150, 50, 50)
  jungleBG.addImage("jungleBG1", bg1)

  monkey = createSprite(75, 270, 50, 50)
  monkey.scale = 0.10
  monkey.addAnimation("monkey1", monkeyMove)

  banana = createSprite(650, 175, 50, 50)
  banana.scale = 0.07
  banana.addImage("bananaMove", banana1)

  stone = createSprite(650, 280, 50, 50)
  stone.scale = 0.10
  stone.addImage("stoneMove", stone1)



}


function draw() {

  background(255)

  banana.velocityX = -5
  stone.velocityX = -5

  if (keyDown(UP_ARROW) && (monkey.y > 175) && (monkeyFlag === 0)) {
    monkey.velocityY = -14
    monkeyFlag = 1
  }

  if (monkey.collide(edges) && (monkeyFlag === 1)) {
    monkeyFlag = 0
  }

  if (banana.x < 0) {
    banana.y = random(125, 200)
    banana.x = 600
    banana.visible = true
  }

  if (monkey.isTouching(banana)) {
    monkey.scale = monkey.scale + 0.0005
    banana.visible = false
  }

  if (stone.x < 0) {
    stone.x = 600
    stone.visible = true
  }

  if (monkey.isTouching(stone)) {
    monkey.scale = monkey.scale - 0.0005
    stone.visible = false
  }

  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(edges)
  drawSprites()
}