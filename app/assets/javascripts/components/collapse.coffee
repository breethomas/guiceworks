class guiceworks.components.Collapse
  constructor: (@el, data) ->
    @data = if data then data else @el.dataset
    @initialize()
    @addListeners()


  # This could wait till an initial trigger
  initialize: ->
    @activated = @el.classList.contains('active')
    id = @el.getAttribute('href').replace(/^#/, '')
    @target = document.getElementById(id)


  activate: ->
    @el.classList.add('active')
    @target.style.height = 0
    @transition('add')
    probe.transitionend && @target.style.height = @target.scrollHeight + 'px'
    @activated = true


  deactivate: ->
    @el.classList.remove('active')
    @reset @target.scrollHeight
    @target.style.height = @target.scrollHeight + 'px'
    @transition('remove')
    @target.style.height = 0
    @activated = false


  dispose: ->
    @removeListeners()


  addListeners: ->
    $.on(@el, 'click', @triggered)


  removeListeners: ->
    $.off(@el, 'click', @triggered)


  reset: (size) ->
    @target.classList.remove('js-collapse')
    @target.style.height = if size then size + 'px'  else 'auto'
    @target.offsetWidth
    @target.classList[(if size isnt null then 'add' else 'remove')]('js-collapse')


  transition: (method) ->
    self = @
    complete = ->
      self.target.removeEventListener(probe.transitionend, complete, false)
      self.reset() if method is 'add'
    @target.classList[method]('in')

    if probe.transitionend and @target.classList.contains('js-collapse')
      @target.addEventListener(probe.transitionend, complete, false)
    else
      complete()


  triggered: (e) =>
    e.preventDefault()
    return @deactivate() if @activated
    @activate()


# Bindable.register('collapse', guiceworks.Collapse)

