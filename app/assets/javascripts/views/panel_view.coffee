class guiceworks.views.PanelView
  system: `undefined` # injected

  setup: ->
    @panel = document.getElementById('panel')
    @container = document.getElementById('panel_container')
    @insert_after_element = null


  initialize: ->
    @collapse = new guiceworks.components.Collapse(@panel)
    $.on(document.getElementById('panel_dismiss'), 'click', => @collapse.deactivate())


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
    complete = =>
      @render(markup)
      @insertAfter(element)
      @collapse.activate()

    return complete() unless @collapse.activated
    $.once(@panel, "Collapse:remove", complete)
    @collapse.deactivate()

