all:
	test
	build

test:
	cd code && \
	npm install && \
	npm test

build:
	cd code && \
	mkdir -p deploy && \
	aws cloudformation package --template-file template.yaml --s3-bucket test-ci-scratch --output-template-file deploy/template.yaml
