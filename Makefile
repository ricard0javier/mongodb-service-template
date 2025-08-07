.PHONY: install build dev start clean

install:
	npm install

build:
	docker-compose build
	npm run build

dev:
	docker-compose up -d mongodb-health
	npm run dev

start:
	npm start

clean:
	docker-compose down -v
	rm -rf dist
	rm -rf node_modules 