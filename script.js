gsap.from('.page1 .box', {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 1,
});
gsap.from('.page2 h1', {
  scale: 0,
  // rotate: 360,
  duration: 2,
  scrollTrigger: {
    trigger: '.page2 h1',
    scroller: 'body',
    // markers: true,
    start: 'top 90%',
  },
});
