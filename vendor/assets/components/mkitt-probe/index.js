window.probe = (function() {
  'use strict';

  var probe = function() {}

  var discover = function(names) {
    var value = (function() {
      var el = document.createElement('discover')
      for (var name in names) {
        if (el.style[name] !== undefined) {
          return names[name]
        }
      }
    })();
    return value ? value : false
  }

  probe.transitionend = (function() {
    return discover({ transition: 'transitionend', WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend' })
  })();


  probe.animationend = (function() {
    return discover({ animation: 'animationend', WebkitAnimation: 'webkitAnimationEnd', MozAnimation: 'animationend' })
  })();

  return probe

})();

