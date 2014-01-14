class guiceworks.views.PanelView
  system: `undefined` # injected

  setup: ->
    console?.log 'PanelView.setup'
    @panel = document.getElementById('panel')
    @container = document.getElementById('panel_container')
    @insert_after_element = null


  initialize: ->


  insertAfter: (element) ->
    return if element is @insert_after_element
    @insert_after_element = element
    $.insertAfter(@panel, @insert_after_element)


  render: (markup) ->
    @container.innerHTML = markup

