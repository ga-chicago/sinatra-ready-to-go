require 'bundler'

Bundler.require :default, ENV['RACK_ENV'].to_sym

require './app/controllers/application_controller'

