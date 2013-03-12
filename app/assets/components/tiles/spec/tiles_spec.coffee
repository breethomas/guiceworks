#= require ../tiles
fixture.preload 'components/tiles/spec/fixture'

describe 'namespace.Tiles', ->

  beforeEach ->
    fixture.load 'components/tiles/spec/fixture'
    @dom = $(fixture.el)

  it 'is registered in bindable', ->
    #expect(utensils.Bindable.getClass('tiles')).to.be namespace.Tiles
    #expect(utensils.Bindable.getClass('tiles')).toEqual namespace.Tiles

  it 'should be tested'
