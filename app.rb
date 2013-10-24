require 'sinatra'
require 'slim'

get '/' do
  slim :index
end

get '/style.css' do
  scss :style, views: 'assets/css'
end