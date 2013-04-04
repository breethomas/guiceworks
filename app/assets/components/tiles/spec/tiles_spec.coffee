#= require ../tiles
fixture.preload 'components/tiles/spec/fixture'

describe 'namespace.Tiles', ->

  beforeEach ->
    fixture.load 'components/tiles/spec/fixture'
    @dom = $(fixture.el)

