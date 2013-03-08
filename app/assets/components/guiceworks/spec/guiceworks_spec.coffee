#= require components/guiceworks

describe 'Guiceworks', ->

  describe '#namespace', ->
    it 'exists for access', ->
      expect(guiceworks).not.to.be undefined

    it 'exists on the window object', ->
      expect(window.guiceworks).not.to.be undefined

