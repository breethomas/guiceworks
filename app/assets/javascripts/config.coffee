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

    @system.mapHandler('CardsModel:setActive', 'cardsView', 'setActive')
    @system.mapHandler('CardsModel:panelData', 'panelView', 'render')
    @system.mapHandler('CardsModel:insertAfter', 'panelView', 'insertAfter')

    @system.mapHandler('Application:startupComplete', 'mastheadView', 'initialize')
    @system.mapHandler('Application:startupComplete', 'panelView', 'initialize')
    @system.mapHandler('Application:startupComplete', 'cardsView', 'initialize')
    @system.mapHandler('Application:startupComplete', 'mediaQueryView', 'initialize')

