Guiceworks::Application.routes.draw do
  get '/main'            => 'main#index'
  get '/styleguide'      => 'styleguide#index'
  root 'main#index'
end

