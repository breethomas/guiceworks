class guiceworks.views.MediaQueryView
  system: `undefined` # injected

  setup: ->
    console?.log 'MediaQueryView.setup'
    @el = @create()
    @num_columns = null
    @addListeners()


  initialize: ->
    @resized()


  create: ->
    el = document.createElement('div')
    el.id = 'mq_monitor'
    document.body.appendChild(el)


  numberOfColumns: ->
    parseInt(window.getComputedStyle(@el).getPropertyValue('z-index'), 10)


  addListeners: ->
    @debounced = $.debounce(@resized, 300)
    window.addEventListener('resize', @debounced, false)


  removeListeners: ->
    @debounced = null
    window.removeEventListener('resize', @debounced, false)


  resized: (e) =>
    num_columns = @numberOfColumns()
    return if num_columns is @num_columns
    @num_columns = num_columns
    @system.notify('MediaQueryView:resized', num_columns)

