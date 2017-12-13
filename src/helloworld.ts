import * as PIXI from 'pixi.js';

var renderer = PIXI.autoDetectRenderer(1400, 900, {transparent: true});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
var texture = PIXI.Texture.fromImage('images/cat.png');
var bunny = new PIXI.Sprite(texture);
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;
bunny.position.x = 400;
bunny.position.y = 300;
bunny.scale.x = 1;
bunny.scale.y = 1;

stage.addChild(bunny);
animate();
console.log(10)
function animate(){
    requestAnimationFrame(animate);
    var bunny = stage.getChildAt(0);
    bunny.rotation += 0.01;
    renderer.render(stage);
}