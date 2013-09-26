Samuel::Application.routes.draw do
  root to: "root#root"
  get '/plaid', to: 'root#plaid'
end
