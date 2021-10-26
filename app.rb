require 'sinatra'
require 'sinatra/namespace'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    
  end

  get '/temperature' do
    {'data': 8}.to_json
  end
end
