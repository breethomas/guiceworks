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

    # Services
    # Controllers

    # Views
    @system.mapSingleton('mastheadView', guiceworks.views.MastheadView)
    @system.mapSingleton('mediaQueryView', guiceworks.views.MediaQueryView)
    @system.mapSingleton('panelView', guiceworks.views.PanelView)
    @system.mapSingleton('cardsView', guiceworks.views.CardsView)

    # Handlers
    @system.mapHandler('CardsModel:updatedInsertionPoint', 'panelView', 'setPanelInsertionPoint')
    @system.mapHandler('CardsView:activated', 'cardsModel', 'updateInsertionPoint')
    @system.mapHandler('CardsView:receivedCards', 'panelView', 'setCards')
    @system.mapHandler('CardsView:numberOfCards', 'cardsModel', 'setNumberOfCards')
    @system.mapHandler('MediaQueryView:resized', 'cardsModel', 'setNumberOfColumns')

    @system.mapHandler('Application:startupComplete', 'mastheadView', 'initialize')
    @system.mapHandler('Application:startupComplete', 'panelView', 'initialize')
    @system.mapHandler('Application:startupComplete', 'cardsView', 'initialize')
    @system.mapHandler('Application:startupComplete', 'mediaQueryView', 'initialize')

