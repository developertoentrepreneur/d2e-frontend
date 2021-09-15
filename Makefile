DOCKER_LOCAL = -f docker-compose.yml
CONTAINER_NAME=platform_frontend

local:
	# start develop environment
	docker-compose $(DOCKER_LOCAL) up ${ARGS}

local-d:
	# start develop environment in the deamon
	ARGS=-d make local

local-build:
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose $(DOCKER_LOCAL) build ${ARGS}