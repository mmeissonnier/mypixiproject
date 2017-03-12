import 'pixi.js';

const renderer = PIXI.autoDetectRenderer(800, 600);
const stage = new PIXI.Container();

document.querySelector('.container').appendChild(renderer.view);
renderer.render(stage);
