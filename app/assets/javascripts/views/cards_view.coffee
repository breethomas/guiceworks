class guiceworks.views.CardsView
  system: `undefined` # injected

  setup: ->
    @el = document.getElementById('cards')
    @cards = @el.querySelectorAll('.card')
    @addListeners()


  initialize: ->
    @system.notify('CardsView:receivedCards', @cards)


  activate: (card) ->
    index = parseInt(card.dataset.index, 10)
    @system.notify('CardsView:indexActivated', index)


  setActive: (card) ->
    item.classList.remove('active') for item in @cards
    card.classList.add('active')


  addListeners: ->
    $.on(@el, 'click', @triggered)


  removeListeners: ->
    $.off(@el, 'click', @triggered)


  triggered: (e) =>
    e.preventDefault()
    card = if e.target.classList.contains('card') then e.target else $.parentSelector(e.target, '.card')
    return unless card
    @activate(card)

