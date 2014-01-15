window.guiceworks ?= {
  components: {}
  models: {}
  services: {}
  controllers: {}
  views: {}
}


class guiceworks.Config
  system: `undefined`

  setup: ->
    @system.autoMapOutlets = true

    # Value Objects

    # Models
    @system.mapSingleton("cardsModel", guiceworks.models.CardsModel)

    # Views
    @system.mapSingleton('mastheadView', guiceworks.views.MastheadView)
    @system.mapSingleton('mediaQueryView', guiceworks.views.MediaQueryView)
    @system.mapSingleton('panelView', guiceworks.views.PanelView)
    @system.mapSingleton('cardsView', guiceworks.views.CardsView)


    # Handlers
    @system.mapHandler('MediaQueryView:resized', 'cardsModel', 'setNumberOfColumns')

    @system.mapHandler('CardsView:receivedCards', 'cardsModel', 'setCards')
    @system.mapHandler('CardsView:indexActivated', 'cardsModel', 'setActivatedIndex')

    @system.mapHandler('CardsModel:setActiveCard', 'cardsView', 'setActive')
    @system.mapHandler('CardsModel:setActivePanel', 'panelView', 'setActive')
    @system.mapHandler('CardsModel:insertAfter', 'panelView', 'insertAfter')


    # Instantiate
    for instance in ['mastheadView', 'panelView', 'cardsView', 'mediaQueryView']
      @system.mapHandler('Application:startupComplete', instance, 'initialize')

