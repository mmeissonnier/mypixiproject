import 'pixi.js';
import Bump from './utils/bump.js';

const raf = window.requestAnimationFrame;
const bump = new Bump(PIXI);

// SETUP STAGE
const renderer = PIXI.autoDetectRenderer(640, 480, {antialias: false, transparent: false, resolution: 1} );
const stage = new PIXI.Container();
const spriteMap = {};
const filter = new PIXI.filters.ColorMatrixFilter();

const setup = () => {
  console.log("SETUP");
  const dragon = new PIXI.Sprite(
    PIXI.loader.resources.dragon.texture
  );
  dragon.scale.set(0.2, 0.2);
  spriteMap.dragon = dragon;
  dragon.filters = [filter];

  stage.addChild(dragon);

  const dragon2 = createAnimatedDragon();
  dragon2.position.set(300, 300);
  dragon2.scale.set(0.2, 0.2);
  dragon2.animationSpeed = 0.1;
  dragon2.play();
  spriteMap.dragon2 = dragon2;

  dragon2.filters = [filter];

  stage.addChild(dragon2);

  raf(render);
};

const render = () => {
//DO RENDERING STUFF HERE
if (bump.hitTestRectangle(spriteMap.dragon, spriteMap.dragon2)) {
  filter.negative();
} else {
  filter.reset();
}
  renderer.render(stage);
  raf(render);
};

//LOAD SPRITES
const loader = PIXI.loader
.add('dragon','assets/1.png')
.add('assets/2.png')
.add('assets/3.png')
.add('assets/4.png')
.load(setup);

//ANIMATED DRAGON
const createAnimatedDragon = () => {
  const texArray = [];
  for (let i=0; i < 4; i++) {
    texArray.push(PIXI.Texture.fromImage(`assets/${i+1}.png`))
  }
  return new PIXI.extras.AnimatedSprite(texArray);
}


loader.onError.add(() => {console.log('error')});

document.querySelector('.container').appendChild(renderer.view);
document.addEventListener('keydown',(event) => {
  const translation = new PIXI.Point();
  switch(event.key) {
    case 'ArrowDown':
      translation.y = 5;
      break;
    case 'ArrowUp':
      translation.y = -5;
      break;
    case 'ArrowLeft':
      translation.x = -5;
      break;
    case 'ArrowRight':
      translation.x = 5;
      break;
    default:
      break;
  };

  const curPos = spriteMap.dragon2.position;
  spriteMap.dragon2.position.set(curPos.x + translation.x, curPos.y + translation.y);
});
