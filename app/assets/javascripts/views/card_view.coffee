class guiceworks.CardView
  constructor: (@el) ->
    @initialize()
    @addListeners()


  initialize: ->
    @index = parseInt(@el.dataset.index, 10)
    @is_active = @el.classList.contains('active')


  activate: ->
    @el.classList.add('active')
    $.trigger(document, 'card:activate', { index: @index })
    @is_active = true


  deactivate: ->
    @el.classList.remove('active')
    $.trigger(document, 'card:deactivate', { index: @index })
    @is_active = false


  dispose: ->
    @removeListeners()


  addListeners: ->
    $.on(@el, 'click', @triggered)


  removeListeners: ->
    $.off(@el, 'click', @triggered)


  triggered: (e) =>
    e.preventDefault()
    return @deactivate() if @is_active
    @activate()


Bindable.register 'card-view', guiceworks.CardView

