import 'pixi.js';

export default class Scene {

  constructor(container){
    // SETUP STAGE
    this.renderer = PIXI.autoDetectRenderer(640, 480, {antialias: false, transparent: false, resolution: 1} );
    this.stage = new PIXI.Container();
    this.spriteMap = {};
    this.renderTasks = [];

    this.render = this.render.bind(this);
    this.addChild = this.addChild.bind(this);
    this.getChildById = this.getChildById.bind(this);

    document.querySelector(`.${container}`).appendChild(this.renderer.view);
  }

  start() {
    window.requestAnimationFrame(this.render);
  }

  addChild(child, id){
    this.stage.addChild(child);
    if(id){
      this.spriteMap[id] = child;
    }
  }

  getChildById(id){
    return this.spriteMap[id];
  }

  render(){
    //DO RENDERING TASKS HERE
    this.renderTasks.forEach((task) => { task() });

    this.renderer.render(this.stage);
    window.requestAnimationFrame(this.render);
  }

}
