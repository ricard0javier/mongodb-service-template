.PHONY: install build dev start docker-build docker-up docker-down clean

install:
	npm install

build:
	npm run build

dev:
	npm run dev

start:
	npm start

docker-build:
	docker-compose build

docker-up:
	docker-compose up -d app mongodb-health

docker-down:
	docker-compose down -v

clean:
	rm -rf dist
	rm -rf node_modules 