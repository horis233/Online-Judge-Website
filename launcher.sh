#! /bin/bash

fuser -k 80/tcp
fuser -k 3000/tcp
fuser -k 5000/tcp
fuser -k 5001/tcp
fuser -k 5002/tcp

sudo service redis_6379 start
sudo cp oj-executor /etc/nginx/sites-enabled
sudo service nginx start

cd ./oj-client
npm install
ng build --watch &

cd ../oj-server
npm install
nodemon server.js &

cd ../executor
pip3 install -r requiremenrs.text
python3 executor_server.py 5000 &
python3 executor_server.py 5001 &
python3 executor_server.py 5002 &

echo "=============================="
read -p "PRESS [enter] to terminate processes." PRESSKEY


fuser -k 80/tcp
fuser -k 3000/tcp
fuser -k 5000/tcp
fuser -k 5001/tcp
fuser -k 5002/tcp


sudo service redis_6379 stop
sudo service nginx stop
