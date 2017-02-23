import 'pixi.js';

const renderer = PIXI.autoDetectRenderer(1024, 768);
const stage = new PIXI.Container();

document.querySelector('.container').appendChild(renderer.view);
renderer.render(stage);

alert('coucou');
