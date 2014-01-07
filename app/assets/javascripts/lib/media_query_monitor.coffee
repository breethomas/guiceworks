#= require ./debounce

class guiceworks.MediaQueryMonitor
  constructor: ->
    @initialize()
    @addListeners()
    @resized()


  initialize: ->
    @el = @create()
    @num_columns = null


  create: ->
    el = document.createElement('div')
    el.id = 'mq_monitor'
    document.body.appendChild(el)


  numberOfColumns: ->
    return parseInt(window.getComputedStyle(@el).getPropertyValue('z-index'), 10)


  dispose: ->
    @removeListeners()


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
    $.trigger(document, 'columns:change', { num_columns })

