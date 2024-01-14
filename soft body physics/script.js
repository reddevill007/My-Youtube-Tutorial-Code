let engine = Matter.Engine.create();

let render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    height: 600,
    width: 1100,
    wireframes: false,
  },
});

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: { visible: false },
  },
});

render.mouse = mouse;

let ground = Matter.Bodies.rectangle(400, 500, 500, 10, { isStatic: true });
let stack = Matter.Composites.stack(200, 200, 4, 4, 0, 0, function (x, y) {
  let sides = Math.round(Matter.Common.random(2, 8));
  return Matter.Bodies.polygon(x, y, sides, Matter.Common.random(20, 50));
});

Matter.World.add(engine.world, [stack, ground, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);
