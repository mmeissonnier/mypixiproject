export default class Draggable extends PIXI.Container {
  constructor(sprite) {
    super();
    this.sprite = sprite;
    this.sprite.interactive = true;
    this.dragModeOn = false;
    this.dragAnchorPoint = new PIXI.Point();

    this.addChild(sprite);
    this.startDragMode();
  }

  startDragMode() {
    this.sprite.on('mousedown', (event) => {
      this.dragModeOn = true;
      this.dragAnchorPoint = event.data.global.clone();
      this.dragAnchorPoint.x -= this.position.x;
      this.dragAnchorPoint.y -= this.position.y;
    });

    this.sprite.on('mouseup', () => {
      this.dragModeOn = false;
    });

    this.sprite.on('mouseupoutside', () => {
      this.dragModeOn = false;
    });

    this.sprite.on('mousemove', (event) => {
      if(this.dragModeOn){
          const nextPoint = new PIXI.Point((event.data.global.x - this.dragAnchorPoint.x), (event.data.global.y - this.dragAnchorPoint.y));
          this.position.set(nextPoint.x, nextPoint.y);
      }
    });
  }

  stopDragMode() {
    this.sprite.off('mousedown');
    this.sprite.off('mouseup');
    this.sprite.off('mouseupoutside');
    this.sprite.off('mousemove');
  }
}
