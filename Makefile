DOCKER_DIR := infrastructure
DC := docker-compose

SERVER_CONTAINER := server-crm-nodejs-vue
SERVER_CONTAINER_EXEC := $(DC) exec $(SERVER_CONTAINER)

CLIENT_CONTAINER := client-crm-nodejs-vue
CLIENT_CONTAINER_EXEC := $(DC) exec $(CLIENT_CONTAINER)

DB_CONTAINER := db-crm-nodejs-vue
DB_CONTAINER_EXEC := $(DC) exec $(DB_CONTAINER)

BASH := /bin/bash
YARN := /usr/local/bin/yarn

build:
	cd $(DOCKER_DIR) && $(DC) build

build-no-cache:
	cd $(DOCKER_DIR) && $(DC) build --no-cache

start:
	cd $(DOCKER_DIR) && $(DC) up -d

stop:
	cd $(DOCKER_DIR) && $(DC) down

restart: stop start

bash-server:
	cd $(DOCKER_DIR) && $(SERVER_CONTAINER_EXEC) $(BASH)

bash-client:
	cd $(DOCKER_DIR) && $(CLIENT_CONTAINER_EXEC) $(BASH)

bash-db:
	cd $(DOCKER_DIR) && $(DB_CONTAINER_EXEC) $(BASH)

watch-server:
	cd $(DOCKER_DIR) && $(SERVER_CONTAINER_EXEC) $(YARN) run watch

serve-client:
	cd $(DOCKER_DIR) && $(CLIENT_CONTAINER_EXEC) $(YARN) run serve

load-fixtures:
	cd $(DOCKER_DIR) && $(SERVER_CONTAINER_EXEC) $(YARN) run load-fixtures

test:
	cd $(DOCKER_DIR) && $(SERVER_CONTAINER_EXEC) $(YARN) run test
