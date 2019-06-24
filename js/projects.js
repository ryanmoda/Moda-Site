window.onload = function() {
    const controller = new ScrollMagic.Controller();
    ;[].forEach.call(document.body.children, (item) => {
      var tl = new TimelineMax();
      tl
        .from(item, 1, {autoAlpha: 0})
      var scene = new ScrollMagic.Scene({
        triggerHook: .75,
        triggerElement: item
      })
        .setTween(tl)
        .addTo(controller);
    })
  }