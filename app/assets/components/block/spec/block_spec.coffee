#= require ../block
fixture.preload 'components/block/spec/fixture'

describe 'namespace.Block', ->

  beforeEach ->
    fixture.load 'components/block/spec/fixture'
    @dom = $(fixture.el)

  it 'is registered in bindable', ->
    #expect(utensils.Bindable.getClass('block')).to.be namespace.Block
    #expect(utensils.Bindable.getClass('block')).toEqual namespace.Block

  it 'should be tested'
