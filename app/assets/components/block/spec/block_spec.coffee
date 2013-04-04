#= require ../block
fixture.preload 'components/block/spec/fixture'

describe 'namespace.Block', ->

  beforeEach ->
    fixture.load 'components/block/spec/fixture'
    @dom = $(fixture.el)

