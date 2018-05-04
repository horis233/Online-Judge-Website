#! /bin/bash

fuser -k 3000/tcp

service redis_6379 start

cd ./oj-client
npm install
ng build --watch &

cd ../oj-server
npm install
nodemon server.js &

echo "=============================="
read -p "PRESS [enter] to terminate processes." PRESSKEY

fuser -k 3000/tcp
service redis_6379 stop

