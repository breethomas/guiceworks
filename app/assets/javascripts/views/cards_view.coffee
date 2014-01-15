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


  deactivate: (card) ->
    @system.notify('CardsView:indexDeactivated')


  setActive: (card) ->
    @deactivateAll()
    card.classList.add('active')


  setDeactive: ->
    @deactivateAll()


  deactivateAll: ->
    item.classList.remove('active') for item in @cards


  addListeners: ->
    $.on(@el, 'click', @triggered)


  removeListeners: ->
    $.off(@el, 'click', @triggered)


  triggered: (e) =>
    e.preventDefault()
    card = if e.target.classList.contains('card') then e.target else $.parentSelector(e.target, '.card')
    return unless card
    return @activate(card) unless card.classList.contains('active')
    @deactivate(card)

