Rails.application.routes.draw do
  devise_for :users

  resources :users

  resources :budgets do
    resources :expenses
  end
end
