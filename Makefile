
.PHONY: assets watch prod

install-docker-node:
	docker pull "node:8-alpine"
install-yarn:
	#curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
	#echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
	#sudo apt-get update && sudo apt-get install yarn
	docker run -it --rm --name yarn -v "$(PWD)":/usr/src/app -w /usr/src/app node:8-alpine yarn add @symfony/webpack-encore --dev
	
webserver:
	bin/console server:run nas.abulman.co.uk:8000

#assets:
#	yarn encore dev
#watch:
#	yarn encore dev --watch
#prod:
#	yarn encore production
assets:
	docker run -it --rm --name yarn -v "$(PWD)":/usr/src/app -w /usr/src/app node:8-alpine yarn encore dev
watch:
	docker run -it --rm --name yarn -v "$(PWD)":/usr/src/app -w /usr/src/app node:8-alpine yarn encore dev --watch
prod:
	docker run -it --rm --name yarn -v "$(PWD)":/usr/src/app -w /usr/src/app node:8-alpine yarn encore production
