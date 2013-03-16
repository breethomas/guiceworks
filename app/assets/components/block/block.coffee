#= require utensils/detect
#= require components/guiceworks

class guiceworks.Block
  constructor: ->
    @initialize()
    # @addListeners()


  initialize: ->
    @document = $(document)
    @dimension = 'height'
    @block = null
    @has_tranny = utensils.Detect.hasTransition
    @tranny_end = utensils.Detect.transition.end


# PUBLIC #

  activate: ->
    scroll = 'scrollHeight'
    @block[@dimension](0)
    @transition 'addClass', => @activated arguments...
    @has_tranny && @block[@dimension](@block[0]?[scroll])


  deactivate: ->
    @reset(@block, @block[@dimension]())
    @transition('removeClass', => @deactivated arguments...) if @block
    @block[@dimension](0)


  render: (tile, row) ->
    # TODO: Cache this lookup
    markup = tile.find('.tile-content').html()
    row.after @template markup
    @block = row.next '.block'


  resize: (row) ->
    return unless @block
    new_block = @block.clone()
    @removeListeners()
    @block.remove()
    row.after new_block
    @block = row.next '.block'
    @addListeners()


  dispose: ->
    @removeListeners()


# PROTECTED #


  activated: ->
    @addListeners()
    @reset(@block)
    @document.trigger 'block:activated'


  deactivated: ->
    @removeListeners()
    @block.remove()
    @block = null
    @document.trigger 'block:deactivated'


  close: (e) ->
    e?.preventDefault()
    @document.trigger 'block:deactivate'


  reset: (panel, size) ->
    panel.removeClass('collapse')[@dimension](size || 'auto')[0]?.offsetWidth
    panel[(if size isnt null then 'addClass' else 'removeClass')]('collapse')
    return @


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
    @close_btn = @block.find '.btn-close'
    @close_btn.on 'click.close', => @close arguments...


  removeListeners: ->
    @close_btn.off('click.close') if @close_btn
    @close_btn = null

