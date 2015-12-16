Rails.application.routes.draw do
  devise_for :users

  resources :budgets do
    resources :expenses
  end
end
