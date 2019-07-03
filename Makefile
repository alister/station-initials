NODE_CONTAINER="node:8-alpine"
YARN=docker run -it --rm --name yarn -v "$(PWD)":/usr/src/app -w /usr/src/app $(NODE_CONTAINER) yarn

.PHONY: assets watch prod

all: clean lint assets

install-docker-node:
	docker pull $(NODE_CONTAINER)
install-yarn:
	#curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
	#echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
	#sudo apt-get update && sudo apt-get install yarn
	$(YARN) add @symfony/webpack-encore --dev
	
webserver:
	bin/console server:run nas.abulman.co.uk:8000

#assets:
#	yarn encore dev
#watch:
#	yarn encore dev --watch
#prod:
#	yarn encore production
assets:
	$(YARN) encore dev
watch:
	$(YARN) encore dev --watch
prod:
	$(YARN) encore production


# Run install on the new ansible-test server, on local Vagrant
deploy-vagrant:
	bundle exec cap vagrant deploy

deploy:
	bundle exec cap prod deploy
deploy-trace:
	bundle exec cap prod deploy --trace
deploy-check:
	bundle exec cap prod deploy:check

lint-yaml:
	bin/console lint:yaml config src ; bin/console lint:yaml src

lint-twig:
	find templates src -name '*twig' | xargs bin/console lint:twig

lint: lint-twig lint-yaml

clean:
	rm -rf var/cache/dev
