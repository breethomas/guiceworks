#= require utensils/detect
#= require components/guiceworks

class guiceworks.Tiles
  constructor: (@tiles) ->
    @initialize()
    @clone()
    @addListeners()


  initialize: ->
    @document = $(document)
    @length = @tiles.length
    @toggles = @tiles.find '.tile-toggle'
    @has_tranny = utensils.Detect.hasTransition
    @tranny_end = utensils.Detect.transition.end


# PUBLIC #

  activate: (element) ->
    @transition element, 'addClass', => @document.trigger 'tile:activated'


  deactivate: (element)  ->
    @transition element, 'removeClass', => @document.trigger 'tile:deactivated'


  eq: (index) ->
    @tiles.eq index


  index: (element) ->
    @tiles.index element


  width: ->
    @tiles.eq(0).outerWidth()


  dispose: ->
    @removeListeners()


# PROTECTED #

  triggered: (e) ->
    e?.preventDefault()
    tile = $(e.target).closest @tiles
    type = if tile.hasClass('active') then "deactivate" else "activate"
    @document.trigger "tiles:#{type}", {tile}


  transition: (element, method, fn) ->
    if @has_tranny then element.one(@tranny_end, fn) else fn()
    element[method]('active')


  clone: ->
    fronts = @tiles.find('.tile-front')
    for front in fronts
      $front = $(front)
      side = $front.clone().removeClass('tile-front').addClass 'tile-side'
      $front.after side


  addListeners: ->
    @toggles.on 'click.tile', => @triggered arguments...


  removeListeners: ->
    @toggles.off 'click.tile'

