gsap.from('.page1 .box', {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});
gsap.from('.page2 .box', {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
  scrollTrigger: '.page2 .box',
});
