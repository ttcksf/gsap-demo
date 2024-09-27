gsap.to('.box1', {
  x: 100,
  y: 100,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: 'green',
  borderRadius: '50%',
  scale: 0.5,
});
gsap.from('.box2', {
  x: 200,
  y: 200,
  duration: 2,
  delay: 1,
});
