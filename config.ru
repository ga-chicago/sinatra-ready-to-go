require 'bundler'
require 'yaml'

Bundler.require :default, ENV['RACK_ENV'].to_sym

database_cxn = YAML.load_file('./config/database.yml')

ActiveRecord::Base.establish_connection database_cxn[ENV['RACK_ENV']] # database_cxn['development']

require './app/models/user'

require './app/controllers/application_controller'
require './app/controllers/users_controller'

map('/users') { run UsersController }
