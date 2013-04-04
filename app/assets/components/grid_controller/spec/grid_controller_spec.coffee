#= require ../grid_controller
#= require components/tiles
#= require components/block

fixture.preload 'components/grid_controller/spec/fixture'

describe 'guiceworks.GridController', ->

  beforeEach ->
    fixture.load 'components/grid_controller/spec/fixture'
    @dom = $(fixture.el)
    @el = @dom.find('.tiles').eq 0
    @tiles = @el.find '.tile'
    @toggles = @tiles.find '.tile-toggle'
    @controller = new guiceworks.GridController @el


  describe 'bindable', ->
    it 'is registered in bindable', ->
      expect(utensils.Bindable.getClass('grid')).to.be guiceworks.GridController


  describe '#options', ->
    it 'sets the default selectors to ".tile"', ->
      expect(@controller.data.selectors).to.be '.tile'


  describe '#initialize', ->
    it 'instantiates a Tiles object', ->
      expect(@controller.tiles).to.be.a guiceworks.Tiles

    it 'instantiates a Block object', ->
      expect(@controller.block).to.be.a guiceworks.Block

    it 'set up a dimensions object for rows and columns', ->
      expect(@controller.dimensions.columns).to.be.above 0
      expect(@controller.dimensions.rows).to.be.above 0


  describe '#activate', ->
    it 'returns the correct attributes on a tile on a click', ->
      @toggles.eq(1).click()
      expect(@controller.active.tile.html()).to.be @tiles.eq(1).html()

    it 'calls #show on the opening of a block', ->
      spy = sinon.spy @controller, 'show'
      @toggles.eq(1).click()
      expect(spy.called).to.be.ok()

    it 'deactivates first when a block is already open', ->
      spy = sinon.spy @controller, 'deactivate'
      @toggles.eq(0).click()
      @toggles.eq(1).click()
      expect(spy.called).to.be.ok()


  describe '#deactivate', ->
    it 'calls deactivate on the Tile object', ->
      @toggles.eq(0).click()
      spy = sinon.spy @controller.tiles, 'deactivate'
      @toggles.eq(1).click()
      expect(spy.called).to.be.ok()

    it 'calls deactivate on the Block object', ->
      @toggles.eq(0).click()
      spy = sinon.spy @controller.block, 'deactivate'
      @toggles.eq(1).click()
      expect(spy.called).to.be.ok()


  describe '#show', ->
    it 'tells block instance to render', ->
      spy = sinon.spy @controller.block, 'render'
      @toggles.eq(0).click()
      expect(spy.called).to.be.ok()

    it 'activates objects after a defferal', (done) ->
      spy1 = sinon.spy @controller.block, 'activate'
      spy2 = sinon.spy @controller.tiles, 'activate'
      @toggles.eq(0).click()
      setTimeout(( =>
        expect(spy1.called).to.be.ok()
        expect(spy2.called).to.be.ok()
        done()
      ), 20)


  describe '#dispose', ->
    it 'calls remove listeners on disposal', ->
      spy = sinon.spy @controller, 'removeListeners'
      @controller.dispose()
      expect(spy.called).to.be.ok()

