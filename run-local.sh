#!/bin/sh

# build docker image first: ./build-image.sh local

docker run -it --name ds-app-local \
	-e "REACT_APP_API_URL=http://localhost:9000/api" \
	-e "REACT_APP_RE_CAPTCHA_SITE_KEY=${REACT_APP_RE_CAPTCHA_SITE_KEY}" \
	-p "3000:3000" \
	-v "${PWD}:/app" \
	--rm \
	digital-sky-app-local:1.0