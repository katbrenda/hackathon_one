Rails.application.routes.draw do
  namespace :api do 
    resources :ranches do
      resources :animals 
    end
  end
end
