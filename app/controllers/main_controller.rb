class MainController < ApplicationController

  def index
    @cards ||= CardsPresenter.new
  end

end

