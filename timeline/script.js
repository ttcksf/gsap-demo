// delayを計算して書かなくても自動的にずらしてくれる
let tl = gsap.timeline();

tl.to('.box1', {
  x: 200,
  rotate: 360,
  duration: 2,
  delay: 1,
});
tl.to('.box2', {
  x: 200,
  duration: 2,
});
tl.to('.box3', {
  x: 200,
  duration: 2,
});

let tl2 = gsap.timeline();
tl2.from('h2', {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl2.from('h4', {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
