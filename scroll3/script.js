gsap.from('.page2 .box', {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 1,
  scrollTrigger: {
    trigger: '.page2 .box',
    scroller: 'body',
    markers: true,
    // スクロールの位置に合わせてアニメーションを実行できる
    start: 'top 60%',
    // スクロールの速度に合わせてアニメーションを実行できる
    end: 'top 30%',
    scrub: true,
  },
});
