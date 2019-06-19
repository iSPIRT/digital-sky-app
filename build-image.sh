#!/bin/sh

docker build -t "digital-sky-app-$1:1.0" --file "Dockerfile-$1" .
