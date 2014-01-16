class guiceworks.views.PanelView
  system: `undefined` # injected

  setup: ->
    @panel = document.getElementById('panel')
    @container = document.getElementById('pane_container')
    @insert_after_element = null


  initialize: ->
    @collapse = new guiceworks.components.Collapse(@panel)
    @addListeners()


  setActive: (markup, element) ->
    return @render(markup) if element is @insert_after_element and @collapse.activated
    @transition(markup, element)


  setDeactive: ->
    @closePanel()


  insertAfter: (element) ->
    return if element is @insert_after_element
    @insert_after_element = element
    $.insertAfter(@panel, @insert_after_element)


  closePanel: ->
    @collapse.deactivate()


  loadImages: (markup="") ->
    figures = @container.querySelector('.pane__figures')
    images = figures.dataset.imgs.split(',')
    markup += """<img src="#{image}"/>""" for image in images
    figures.innerHTML = markup


  render: (markup) ->
    hide = =>
      @container.innerHTML = markup
      @container.classList.remove('hide')
      @container.classList.add('show')
      @loadImages()
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


  addListeners: ->
    $.on(document.getElementById('panel_dismiss'), 'click', => @system.notify('PanelView:panelClosed'))

