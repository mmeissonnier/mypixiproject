import 'pixi.js';

export default class Scene {
  // SETUP STAGE
  constructor(container){
    // CREATE RENDERER
    this.renderer = PIXI.autoDetectRenderer(640, 480, {antialias: false, transparent: false, resolution: 1} );
    // CREATE A STAGE CONTAINER
    this.stage = new PIXI.Container();
    this.spriteMap = {};
    this.renderTasks = [];

    this.render = this.render.bind(this);
    this.addChild = this.addChild.bind(this);
    this.getChildById = this.getChildById.bind(this);

    document.querySelector(`.${container}`).appendChild(this.renderer.view);

    this.stage.on('click', () => {this.getMouseCoords();});
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
