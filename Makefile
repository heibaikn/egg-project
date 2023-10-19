.PHONY: mysql
mysql:
	bash -ec 'npx sequelize db:migrate'

.PHONY: dev
dev:
	bash -ec 'docker-compose -f ./docker/docker-compose.dev.yml up -d'

.PHONY: dev_build
dev_build:
	bash -ec 'docker-compose -f ./docker/docker-compose.dev.yml up -d --build'

.PHONY: dev_stop
dev_stop:
	bash -ec 'docker-compose -f ./docker/docker-compose.dev.yml down'

.PHONY: start_old
start_old:
	bash -ec 'docker-compose -f ./docker/docker-compose.yml up -d'

.PHONY: start
start:
	bash -ec 'docker-compose -f ./docker/docker-compose.yml up -d --build'

.PHONY: stop
stop:
	bash -ec 'docker-compose -f ./docker/docker-compose.yml stop'
