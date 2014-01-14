class guiceworks.models.CardsModel
  system: `undefined` # injected

  setup: ->
    console?.log 'CardsModel.setup'
    @index = null
    @cards = null
    @num_columns = null


  setNumberOfColumns: (@num_columns) ->
    @system.notify('CardsModel:insertAfter', @getLastElementInRow(@index))


  setCards: (@cards) ->
    @system.notify('CardsModel:setCards', @cards)


  setActivatedIndex: (@index) ->
    @system.notify('CardsModel:setActive', @cards[@index])
    @system.notify('CardsModel:panelData', @getPanelData(@index))
    @system.notify('CardsModel:insertAfter', @getLastElementInRow(@index))


  getRow: ->
    Math.floor(@index / @num_columns)


  getLastIndexInRow: (row) ->
    ((row + 1) * @num_columns) - 1


  getLastElementInRow: ->
    @cards[@getLastIndexInRow(@getRow(@index))]


  getPanelData: ->
    @cards[@index].querySelector('.js_panel_contents').innerHTML

