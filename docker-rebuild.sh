#!/bin/bash
git pull
docker stop sciencecursor.org
docker rm sciencecursor.org
docker build -t sciencecursor-image
docker run --name sciencecursor.org -d -p 8000:80 --restart=always sciencecursor-image
