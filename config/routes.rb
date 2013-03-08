Guiceworks::Application.routes.draw do
  #this route should always be last
  mount Cmsimple::Engine => '/'
end
