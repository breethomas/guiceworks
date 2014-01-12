class guiceworks.views.PanelView
  system: `undefined` # injected

  setup: ->
    console?.log 'PanelView.setup'
    @panel = document.getElementById('panel')
    @insertion_index = null


  initialize: ->


  setCards: (@cards) ->


  setPanelInsertionPoint: (insertion_index) ->
    return if insertion_index is @insertion_index
    @insertion_index = insertion_index
    $.insertAfter(@panel, @cards[@insertion_index])

