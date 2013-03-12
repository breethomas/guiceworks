#= require ../grid_controller
fixture.preload 'components/grid_controller/spec/fixture'

describe 'namespace.GridController', ->

  beforeEach ->
    fixture.load 'components/grid_controller/spec/fixture'
    @dom = $(fixture.el)

  it 'is registered in bindable', ->
    #expect(utensils.Bindable.getClass('grid-controller')).to.be namespace.GridController
    #expect(utensils.Bindable.getClass('grid-controller')).toEqual namespace.GridController

  it 'should be tested'
