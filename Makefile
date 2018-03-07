install:
	npm install

lint:
	npm run eslint

start:
	npm run babel-node -- src/bin/brain-games.js

start2:
	npm run babel-node -- src/bin/brain-even.js	

publish:
	npm publish
