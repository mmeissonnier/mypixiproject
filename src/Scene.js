import 'pixi.js';

export default class Scene extends PIXI.Container {
  // SETUP STAGE
  constructor(container){
    super();
    // CREATE RENDERER
    this.renderer = PIXI.autoDetectRenderer(640, 480, {antialias: false, transparent: false, resolution: 1} );
    this.renderer.backgroundColor = 0x1f1f1f;
    this.spriteMap = {};
    this.renderTasks = [];

    this.render = this.render.bind(this);
    this.addChild = this.addChild.bind(this);
    this.getChildById = this.getChildById.bind(this);

    document.querySelector(`.${container}`).appendChild(this.renderer.view);
  }

  addChild(child, id){
    super.addChild(child);
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

    this.renderer.render(this);
    window.requestAnimationFrame(this.render);
  }

}
