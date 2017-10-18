all:
	test
	package

test:
	cd code
	npm install && npm test
	cd ..

package:
	cd code
	mkdir -p deploy
	aws cloudformation package --template-file template.yaml --s3-bucket test-ci-scratch --output-template-file deploy/template.yaml
	cd ..
