Rails.application.routes.draw do
  devise_for :users
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :books, only: %i[index show edit update destroy new create]
      resources :categories, only: %i[index edit update destroy new create]
    end
  end
end
