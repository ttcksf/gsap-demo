// gsap.to('.title', {
//   color: 'red',
//   duration: 2,
//   delay: 1,
// });
gsap.from('.title', {
  // color: 'red',
  opacity: 0,
  duration: 2,
  delay: 1,
  // stagger: 1,
  stagger: -1,
});
gsap.to('.box', {
  x: 200,
  duration: 2,
  delay: 1,
  rotate: 360,
  // repeat: 1,
  repeat: -1,
  yoyo: true,
});
