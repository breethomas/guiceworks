#= require utensils/detect
#= require components/guiceworks

class guiceworks.Block
  constructor: ->
    @initialize()
    @addListeners()


  initialize: ->
    @document = $(document)
    @block = null
    @has_tranny = utensils.Detect.hasTransition
    @tranny_end = utensils.Detect.transition.end


# PUBLIC #

  activate: ->
    @transition 'addClass', => @activated arguments...


  deactivate: ->
    @transition('removeClass', => @deactivated arguments...) if @block


  render: (tile, row) ->
    # TODO: Cache this lookup
    markup = tile.find('.tile-content').html()
    row.after @template markup
    @block = row.next '.block'


  resize: (row) ->
    return unless @block
    new_block = @block.clone()
    @block.remove()
    row.after new_block
    @block = row.next '.block'


  dispose: ->
    @removeListeners()


# PROTECTED #


  activated: ->
    @document.trigger 'block:activated'


  deactivated: ->
    @block.remove()
    @block = null
    @document.trigger 'block:deactivated'


  transition: (method, fn) ->
    if @has_tranny then @block.one(@tranny_end, fn) else fn()
    @block[method]('in')


  template: (markup) ->
    """
      <div class="block collapse">
        #{markup}
      </div>
    """


  addListeners: ->


  removeListeners: ->


