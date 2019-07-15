source 'https://rubygems.org'

group :deployment do
  gem 'capistrano', '~> 3.5.0'
  gem 'capistrano-symfony', '~> 1.0.0' #, git: 'https://github.com/capistrano/symfony'
  gem 'capistrano-composer'
  gem 'capistrano-file-permissions'
  gem 'capistrano-symfony-doctrine', '~> 0.2.11', git: 'https://github.com/glooby/capistrano-symfony-doctrine'

  gem 'cap-deploy-tagger'
  gem 'capistrano-deploytags', '~> 1.0.0', require: false
  gem 'rollbar', '~> 2.21.0'
  gem 'capistrano-copy-files'
  # https://github.com/capistrano/bundler
  gem 'capistrano-bundler', '~> 1.1.2'

  gem "airbrussh", '~> 1.0.0' #, :require => false

  # needs .htaccess..vhost or nginx support
  # https://github.com/capistrano/maintenance
  #gem 'capistrano-maintenance', github: "capistrano/capistrano-maintenance"

end
