#= require utensils/bindable
#= require components/guiceworks
#= require components/tiles
#= require components/block

class guiceworks.GridController
  constructor: (@el, data) ->
    @data = if data then data else @el.data()
    @options()
    @initialize()
    @addListeners()


  options: ->
    @data.selectors ?= '.tile'


  initialize: ->
    @mover = $('html, body')
    @document = $(document)
    @window = $(window)
    @tiles = new guiceworks.Tiles(@el.find @data.selectors)
    @block = new guiceworks.Block()
    @dimensions = @setGridDimensions()


# PUBLIC #

  activate: (e, data) ->
    @deactivate() if @active
    @active = @setActive data.tile
    @show() unless @exists
    @exists = true


  deactivate: ->
    @tiles.deactivate @active.tile
    @block.deactivate()
    @active = null


  show: ->
    @block.render(@active.tile, @tiles.eq @active.last)
    _.defer =>
      @tiles.activate @active.tile
      @block.activate()
      @mover.animate scrollTop: @active.tile.offset().top, 250


  next: ->
    @exists = false
    return unless @active
    @exists = true
    @show()


  dispose: ->
    @removeListeners()


# PROTECTED #

  resized: ->
    @dimensions = @setGridDimensions()
    return unless @active
    @active = @setActive @active.tile
    @block.resize @tiles.eq @active.last


  setGridDimensions: ->
    @columns = @getNumberOfColumns()
    @rows = @getNumberOfRows()
    # console?.log "cols: #{@columns}", "rows: #{@rows}"
    {columns: @columns, rows: @rows}


  setActive: (tile) ->
    index = @tiles.index tile
    row = @getRow index
    last = @getLastTileInRow row
    {tile, index, row, last}


  getNumberOfColumns: ->
    Math.round @window.outerWidth() / @tiles.width()


  getNumberOfRows: ->
    Math.ceil @tiles.length / @columns


  getRow: (index) ->
    Math.floor index / @columns


  getLastTileInRow: (row) ->
    last = ((row + 1) * @columns) - 1
    last = @tiles.length - 1 if last > @tiles.length - 1
    last


  addListeners: ->
    @debounced = _.debounce @resized, 300
    @document.on 'tiles:activate', => @activate arguments...
    @document.on 'tiles:deactivate', => @deactivate arguments...
    @document.on 'block:deactivate', => @deactivate arguments...
    @document.on 'block:deactivated', => @next arguments...
    @window.on 'resize.grid_controller', => @debounced arguments...


  removeListeners: ->
    @document.off 'tiles:activate'
    @document.off 'tiles:deactivate'
    @document.off 'block:deactivate'
    @document.off 'block:deactivated'
    @window.off "resize.grid_controller"
    @debounced = null


utensils.Bindable.register 'grid', guiceworks.GridController

