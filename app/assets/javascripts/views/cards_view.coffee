class guiceworks.views.CardsView
  system: `undefined` # injected

  setup: ->
    console?.log 'CardsView.setup'
    @el = document.getElementById('cards')
    @cards = @el.querySelectorAll('.card')
    @addListeners()


  initialize: ->
    @system.notify('CardsView:receivedCards', @cards)
    @system.notify('CardsView:numberOfCards', @cards.length)


  activate: (card) ->
    index = parseInt(card.dataset.index, 10)
    @system.notify('CardsView:activated', index)


  addListeners: ->
    $.on(@el, 'click', @triggered)


  removeListeners: ->
    $.off(@el, 'click', @triggered)


  triggered: (e) =>
    e.preventDefault()
    card = if e.target.classList.contains('card') then e.target else $.parentSelector(e.target, '.card')
    return unless card
    @activate(card)

