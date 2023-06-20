Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  namespace :api do
    namespace :v1 do
      root "messages#index"
      get "/messages", to: "messages#index"
      post "/messages", to: "messages#create"
    end
  end
end
