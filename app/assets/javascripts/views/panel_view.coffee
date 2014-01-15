class guiceworks.views.PanelView
  system: `undefined` # injected

  setup: ->
    @panel = document.getElementById('panel')
    @dismiss = document.getElementById('panel_dismiss')
    @container = document.getElementById('panel_container')
    @insert_after_element = null


  initialize: ->
    @collapse = new guiceworks.components.Collapse(@dismiss)


  setActive: (markup, element) ->
    return @render(markup) if element is @insert_after_element and @collapse.activated
    @transition(markup, element)


  insertAfter: (element) ->
    return if element is @insert_after_element
    @insert_after_element = element
    $.insertAfter(@panel, @insert_after_element)


  render: (markup) ->
    hide = =>
      @container.innerHTML = markup
      @container.classList.remove('hide')
      @container.classList.add('show')
    show = =>
      @container.classList.remove('show')

    @container.classList.add('hide')
    setTimeout(( => hide()), 250)
    setTimeout(( => show()), 500)



  transition: (markup, element) ->
    delay = if !@collapse.activated then 10 else 500
    @collapse.deactivate() if @collapse.activated
    setTimeout(( => @transitionComplete(markup, element)), delay)


  transitionComplete: (markup, element) ->
    @render(markup)
    @insertAfter(element)
    @collapse.activate()
