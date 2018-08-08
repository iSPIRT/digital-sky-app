#!/bin/sh -e

yarn build

export API_PORT=${API_PORT:-9000}
export API_HOST=${API_HOST:-localhost}
export CLIENT_MAX_BODY_SIZE=${CLIENT_MAX_BODY_SIZE:-20M}
export SSL_PORT=${SSL_PORT:-443}

REPLACEABLE='$API_PORT:$API_HOST:$CLIENT_MAX_BODY_SIZE:$SSL_PORT'

envsubst $REPLACEABLE < /app/nginx.conf.template > /etc/nginx/nginx.conf

/app/add_self_signed_certificate.sh

# Use exec so nginx can get signals directly
exec nginx
