window.poma = (function() {
  'use strict';

  var poma = function() {}

  var _metafunc = function(node) {
    return (node instanceof Node) ? '_execute' : '_executes'
  }

  poma._execute = function(node, fn) {
    var args = [].slice.call(arguments, 2)
    node[fn].apply(node, args)
    return node
  }

  poma._executes = function(nodes, fn) {
    var args = [].slice.call(arguments, 2)
    for (var i = 0, len = nodes.length; i < len; i += 1) {
      nodes[i][fn].apply(nodes[i], args)
    }
    return nodes
  }

// ## PUBLIC ##

  poma.on = function(node, type, fn) {
    var f = _metafunc(node)
    return poma[f](node, 'addEventListener', type, fn, false)
  }

  poma.off = function(node, type, fn) {
    var f = _metafunc(node)
    return poma[f](node, 'removeEventListener', type, fn, false)
  }

  poma.once = function(node, type, fn) {
    var handler = function(e) {
      poma.off(node, type, handler)
      fn(e)
    }
    poma.on(node, type, handler)
    return node
  }

  poma.event = function(type, data) {
    var e = document.createEvent('HTMLEvents')
    e.initEvent(type, true, true)
    e.eventName = type
    e.data = data || {}
    return e
  }

  poma.trigger = function(node, type, data) {
    var e = (typeof type === 'string') ? poma.event(type, data) : type
    var f = _metafunc(node)
    return poma[f](node, 'dispatchEvent', e)
  }


  poma.matches = (function() {
    var b = document.body
    return b.matches || b.webkitMatchesSelector || b.mozMatchesSelector || b.msMatchesSelector
  })();

  poma.parentSelector = function(node, selector) {
    node = node.parentNode
    while (node && node !== document) {
      if (poma.matches.bind(node)(selector)) {
        return node
      } else {
        node = node.parentNode
      }
    }
    return false
  }

  poma.parentSelectorAll = function(node, selector) {
    var nodes = []
    node = node.parentNode
    while (node !== document) {
      if (poma.matches.bind(node)(selector)) {
        nodes.push(node)
      }
      node = node.parentNode
    }
    return (nodes.length) ? nodes : false
  }


  poma.remove = function(node) {
    return node.parentNode.removeChild(node)
  }


  poma.plugin = function(object, fn) {
    if (typeof poma[fn] === 'function')
      return console.error('The "' + fn + '" function already exists on poma');
    poma[fn] = object[fn]
    return poma[fn]
  }

  return poma

})();

