require 'rubygems'
require 'bundler'

Bundler.require

require File.join(File.dirname(__FILE__), *%w[lib logo])

run Sinatra::Application