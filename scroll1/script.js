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
  // scrollTrigger: '.page2 .box',
  scrollTrigger: {
    trigger: '.page2 .box',
    scroller: 'body',
    markers: true,
    // スタートラインを画面の上からの座標で変更できる
    start: 'top 60%',
  },
});
