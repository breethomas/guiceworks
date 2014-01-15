class guiceworks.components.Collapse
  constructor: (@target) ->
    @initialize()


  initialize: ->
    @activated = false


  activate: ->
    @target.style.height = 0
    @transition('add')
    probe.transitionend && @target.style.height = @target.scrollHeight + 'px'
    @activated = true


  deactivate: ->
    @reset @target.scrollHeight
    @target.style.height = @target.scrollHeight + 'px'
    @transition('remove')
    @target.style.height = 0
    @activated = false


  toggle: ->
    return @deactivate() if @activated
    @activate()


  reset: (size) ->
    @target.classList.remove('js-collapse')
    @target.style.height = if size then size + 'px'  else 'auto'
    @target.offsetWidth
    @target.classList[(if size isnt null then 'add' else 'remove')]('js-collapse')


  transition: (method) ->
    complete = =>
      @target.removeEventListener(probe.transitionend, complete, false)
      @reset() if method is 'add'
      $.trigger(@target, "Collapse:#{method}")
    @target.classList[method]('in')

    if probe.transitionend
      return @target.addEventListener(probe.transitionend, complete, false)
    complete()


