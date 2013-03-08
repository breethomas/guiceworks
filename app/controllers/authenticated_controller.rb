class AuthenticatedController < ApplicationController

  before_filter :authenticate_user

  protected

  def authenticate_user
    authenticate_or_request_with_http_basic 'Application' do |name, password|
      password == ENV['CMS_PASSWORD']
    end
  end

end
