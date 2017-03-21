export default class Dragon extends PIXI.Sprite {
  constructor() {
    super(PIXI.loader.resources.dragon1.texture);
    this.scale.set(0.2, 0.2);
  }
}
