class CardPresenter

  def initialize(card)
    @card = card
  end

  def type
    @card[:type]
  end

  def pathname
    @card[:pathname]
  end

  def title
    @card[:title]
  end

  def id(index)
    "#{title.gsub(/\s+/, '_').downcase}_#{index}".underscore
  end

  def card_image
    @card[:card_image]
  end

  def card_image?
    card_image
  end

  def icon
    @card[:icon]
  end

  def icon?
    icon
  end

  def subtitle
    @card[:subtitle]
  end

  def subtitle?
    subtitle
  end

  def images
    @card[:images]
  end

end

