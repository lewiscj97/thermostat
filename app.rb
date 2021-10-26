require 'sinatra'

class Thermostat < Sinatra::Base
  enable :sessions

  post '/temperature' do
    p params
  end
end
