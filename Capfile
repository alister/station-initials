# default deploy_config_path is 'config/deploy.rb'
set :deploy_config_path, 'deployment/deploy.rb'
# default stage_config_path is 'config/deploy'
set :stage_config_path, 'deployment/deploy'

# Load DSL and Setup Up Stages
require 'capistrano/setup'

# Includes default deployment tasks
require 'capistrano/deploy'
require 'capistrano/composer'
require 'capistrano/symfony'
require 'capistrano/file-permissions'
require 'capistrano/copy_files'
require 'capistrano/symfony-doctrine'
# Rollbar deployment tracking
#require 'rollbar/capistrano3'

# require 'capistrano/maintenance'  @todo later?
# require 'capistrano/github'       @todo later?
require 'cap-deploy-tagger/capistrano'

# comment this out to avoid
#     Whoa there, partner. Dirty trees can't deploy. Git yerself clean first
require 'capistrano/deploytags'

require "airbrussh/capistrano"

# Includes tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
#
#   https://github.com/capistrano/rvm
#   https://github.com/capistrano/rbenv
#   https://github.com/capistrano/chruby
#   https://github.com/capistrano/bundler
#   https://github.com/capistrano/rails
#
# require 'capistrano/rvm'
# require 'capistrano/rbenv'
# require 'capistrano/chruby'
# require 'capistrano/bundler'
# require 'capistrano/rails/assets'
# require 'capistrano/rails/migrations'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }
