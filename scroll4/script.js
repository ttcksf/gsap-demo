gsap.to('.page2 h1', {
  transform: 'translate(-150%)',
  scrollTrigger: {
    trigger: '.page2',
    scroller: 'body',
    markers: true,
    start: 'top 0%',
    end: 'top -100%',
    scrub: true,
    // 要素を固定できる
    pin: true,
  },
});
