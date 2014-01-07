class CardsPresenter

  def initialize
  end

  def tiles
    [
      { type: 'client', title: 'Client Name' },
      { type: 'study',  title: 'Client' },
      { type: 'client', title: 'Client Name' },
      { type: 'skill',  title: 'User Experience' },
      { type: 'study',  title: 'Client' },
      { type: 'skill',  title: 'User Experience' },
      { type: 'study',  title: 'Client' },
      { type: 'client', title: 'Client Name' },
      { type: 'client', title: 'Client Name' },
      { type: 'study',  title: 'Client' },
      { type: 'client', title: 'Client Name' },
      { type: 'skill',  title: 'User Experience' },
      { type: 'study',  title: 'Client' },
      { type: 'skill',  title: 'User Experience' },
      { type: 'study',  title: 'Client' },
      { type: 'client', title: 'Client Name' }
    ]
  end


  def type(card)
    card[:type]
  end


  def title(card)
    card[:title]
  end


  def id(card, index)
    "#{card[:title]}_#{index}".underscore
  end

end

