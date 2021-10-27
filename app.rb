require 'sinatra'
require 'sinatra/cors'
require 'json'

class Thermostat < Sinatra::Base
  register Sinatra::Cors
  
  set :allow_origin, "*"
  set :allow_methods, "GET,HEAD,POST"
  set :allow_headers, "content-type,if-modified-since"
  set :expose_headers, "location,link"

  data = {
    temperature: '15',
    power_saving: true,
    location: 'Manchester'
  }

  get '/' do
    
  end

  get '/temperature' do
    data.to_json
  end
end
