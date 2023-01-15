Rails.application.routes.draw do
  get 'recognizer/index'
  get 'recognizer/app'
  get 'recognizer/submit'

  root 'recognizer#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
