class guiceworks.models.CardsModel
  system: `undefined` # injected

  setup: ->
    @data = {}
    @index = null
    @cards = null
    @num_columns = null


  setNumberOfColumns: (@num_columns) ->
    @system.notify('CardsModel:insertAfter', @getLastElementInRow())


  setCards: (@cards) ->
    @system.notify('CardsModel:setCards', @cards)


  setActivatedIndex: (@index) ->
    @system.notify('CardsModel:setActiveCard', @cards[@index])
    @system.notify('CardsModel:setActivePanel', @getPanelData(), @getLastElementInRow())


  setDeactivatedIndex: (@index=null) ->
    @system.notify('CardsModel:setDeactiveCard')


  getRow: ->
    Math.floor(@index / @num_columns)


  getLastIndexInRow: (row) ->
    ((row + 1) * @num_columns) - 1


  getLastElementInRow: ->
    @cards[@getLastIndexInRow(@getRow(@index))]


  getPanelData: ->
    @data[@cards[@index].id] ?= @cards[@index].querySelector('.js_panel_contents').innerHTML

