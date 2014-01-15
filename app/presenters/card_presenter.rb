class CardPresenter

  def initialize(card)
    @card = card
  end

  def type
    @card[:type]
  end

  def title
    @card[:title]
  end

  def id(index)
    "#{title.gsub(/\s+/, '_').downcase}_#{index}".underscore
  end

  def icon
    @card[:icon]
  end

  def subtitle
    @card[:subtitle]
  end

end

