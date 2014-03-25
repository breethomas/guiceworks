class guiceworks.views.MastheadView
  system: `undefined` # injected

  setup: -> # noop


  initialize: ->
    @button = document.getElementById('about_trigger')
    @collapse = new guiceworks.components.Collapse(document.getElementById('about'))
    @addListeners()


  addListeners: ->
    $.on(@button, 'click', @toggle)


  toggle: =>
    @collapse.toggle()
    @button.classList.toggle('active')

