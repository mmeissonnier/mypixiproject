import Scene from './Scene';
import KeyboardManager from './KeyboardManager';
import Dragon from './Dragon.js';
import AnimatedDragon from './AnimatedDragon.js';


const scene = new Scene('container');
const keyboard = new KeyboardManager();

//SETUP
const setup = () => {
  const dragon = new Dragon();
  scene.addChild(dragon, 'dragon1');

  const dragon2 = new AnimatedDragon();
  dragon2.position.set(300, 300);
  dragon2.play();

  scene.addChild(dragon2, 'dragon2');

  //START RENDERING
  scene.render();

  //LISTEN TO KEYBOARD
  keyboard.start();

  // DEFINE TASKS
  const moveDragonTask = () => {
    const dragon = scene.getChildById('dragon2');
    dragon.position.set(dragon.x + keyboard.translation.x, dragon.y + keyboard.translation.y);
  }

  scene.renderTasks.push(moveDragonTask);
};


//LOAD SPRITES
const loader = PIXI.loader
.add('dragon1','assets/1.png')
.add('dragon2','assets/2.png')
.add('dragon3','assets/3.png')
.add('dragon4','assets/4.png')
.load(setup);

loader.onError.add(() => {console.log('error')});
