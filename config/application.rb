require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Guiceworks
  class Application < Rails::Application
    config.autoload_paths << Rails.root.join('app/presenters')

    # Make sure your secret_key_base is kept private if you're sharing your code publicly.
    config.secret_key_base = ENV['SECRET_KEY_BASE']

    # Configure sensitive parameters which will be filtered from the log file.
    config.filter_parameters += [:password]

    # Session store configuration
    config.session_store :cookie_store, key: '_guiceworks_session'
  end
end

