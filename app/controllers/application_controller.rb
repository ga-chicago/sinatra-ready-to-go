class ApplicationController < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  get '/?' do
    'Default page'
  end
end
