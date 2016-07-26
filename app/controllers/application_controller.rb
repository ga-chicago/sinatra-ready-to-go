class ApplicationController < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  set :database, { adapter: 'sqlite3', database: File.dirname(__FILE__) + '/../../db.sqlite3' }
end
