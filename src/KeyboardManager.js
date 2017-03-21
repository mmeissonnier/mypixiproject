export default class KeyboardManager {
  constructor(){
    this.translation = new PIXI.Point();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start(){
    document.addEventListener('keydown',(event) => {
      switch(event.key) {
        case 'ArrowDown':
          this.translation.set(0, 5);
          break;
        case 'ArrowUp':
          this.translation.set(0, -5);
          break;
        case 'ArrowLeft':
          this.translation.set(-5, 0);
          break;
        case 'ArrowRight':
          this.translation.set(5, 0);
          break;
        default:
          this.translation.set(0, 0);
          break;
      }
    });

    document.addEventListener('keyup',(event) => {
      this.translation.set(0, 0);
    });
  }

  stop(){
    document.removeEventListener('keydown');
    document.removeEventListener('keyup');
  }
}
