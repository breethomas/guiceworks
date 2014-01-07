class guiceworks.CardController
  constructor: (@el, data) ->
    @initialize()
    @addListeners()


  initialize: ->
    @panel = document.getElementById('panel')
    @num_columns = null
    @cards = @el.querySelectorAll('.card')
    @num_cards = @cards.length


  setPanelPositioning: (index) ->
    # row = @getRow(index)

    last_in_row = @getLastCardInRow(index)
    cards_in_row = @getCardsInRow(index)

    # Opimize this...
    $.insertAfter(@panel, last_in_row)


  getRow: (index) ->
     Math.floor(index / @num_columns)


  getCardsInRow: (index) ->
    last_index = parseInt(@getLastCardInRow(index).dataset.index, 10)
    start = parseInt(@cards[(last_index - (@num_columns - 1))].dataset.index, 10)
    Array.prototype.slice.call(@cards, start, last_index + 1)


  getLastCardInRow: (index) ->
    last = ((@getRow(index) + 1) * @num_columns) - 1
    last = (@num_cards - 1) if last > @num_cards - 1
    @cards[last]


  dispose: ->
    @removeListeners()
    $.trigger(document, 'card_controller:dispose')


  addListeners: ->
    $.on(document, 'card:activate', @cardActivated)
    $.on(document, 'card:deactivate', @cardDeactivated)
    $.on(document, 'columns:change', @updateColumns)


  removeListeners: ->
    $.off(document, 'card:activate', @cardActivated)
    $.off(document, 'card:deactivate', @cardDeactivated)
    $.off(document, 'columns:change', @updateColumns)


  cardActivated: (e) =>
    @setPanelPositioning(e.data.index)


  cardDeactivated: (e) =>
    console?.log 'deactivated', e.data.index


  updateColumns: (e) =>
    @num_columns = e.data.num_columns
    console?.log('there are ', @num_columns, 'columns')


Bindable.register 'card-controller', guiceworks.CardController

