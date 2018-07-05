Rails.application.routes.draw do
  devise_for :customers
  root to: 'pages#home'

  resources :cookies do
    resources :orders
  end
end
