class guiceworks.models.CardsModel
  system: `undefined` # injected

  setup: ->
    console?.log 'CardsModel.setup'
    @num_columns = null
    @num_cards = null


  setNumberOfColumns: (@num_columns) ->


  setNumberOfCards: (@num_cards) ->


  getRow: (index) ->
    Math.floor(index / @num_columns)


  getLastIndexInRow: (row) ->
    ((row + 1) * @num_columns) - 1


  updateInsertionPoint: (index) ->
    @system.notify('CardsModel:updatedInsertionPoint', @getLastIndexInRow(@getRow(index)))

