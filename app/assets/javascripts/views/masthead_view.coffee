class guiceworks.views.MastheadView
  system: `undefined` # injected

  setup: ->
    @collapse = null


  initialize: ->
    @el = document.getElementById('masthead')
    @collapse_trigger = @el.querySelector('[data-bindable="collapse"]')
    @collapse = new guiceworks.components.Collapse(@collapse_trigger)

