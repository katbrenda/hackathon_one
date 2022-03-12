Rails.application.routes.draw do
  namespace :api do 
    resources :jobs do
    end
    resources :ranches do
      resources :animals 
    end
  end
end
