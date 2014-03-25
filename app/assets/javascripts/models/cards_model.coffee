class guiceworks.models.CardsModel
  system: `undefined` # injected

  setup: ->
    @data = {}
    @index = null
    @cards = null
    @num_columns = null


  setNumberOfColumns: (@num_columns) ->
    return unless @index
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
    last = ((row + 1) * @num_columns) - 1
    return @cards.length - 1 if last > @cards.length - 1
    return 0 if last < 0
    last


  getLastElementInRow: ->
    @cards[@getLastIndexInRow(@getRow(@index))]


  getPanelData: ->
    @data[@cards[@index].id] ?= @cards[@index].querySelector('.js_panel_contents').innerHTML

