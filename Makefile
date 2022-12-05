DOCKER_DIR := infrastructure
DC := docker-compose

BASH := /bin/bash

build:
	cd $(DOCKER_DIR) && $(DC) build

build-no-cache:
	cd $(DOCKER_DIR) && $(DC) build --no-cache

start:
	cd $(DOCKER_DIR) && $(DC) up -d

stop:
	cd $(DOCKER_DIR) && $(DC) down

restart: stop start
