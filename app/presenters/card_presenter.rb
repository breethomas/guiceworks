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

  def background_image
    @card[:image]
  end

  def background_image?
    background_image
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

end

