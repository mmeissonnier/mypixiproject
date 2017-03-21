export default class AnimatedDragon extends PIXI.extras.AnimatedSprite {
  constructor(){
    const texArray = [];
    for (let i=0; i < 4; i++) {
      texArray.push(PIXI.loader.resources[`dragon${i+1}`].texture);
    };
    super(texArray);
    this.scale.set(0.2, 0.2);
    this.animationSpeed = 0.1;
  }
}
