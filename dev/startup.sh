#!/bin/bash
trap stop INT

function stop() {
  source ../notification-mail-service/dev/stop.sh
  exit
}

cd ../api.serlo.org
git checkout notification-email-sent
git pull
yarn start &

cd ../database-layer
git checkout notification-email-sent
git pull
sleep 30
cargo run &

cd ../local-dev-env
git pull
yarn kratos -d

cd ../notification-mail-service
git pull
yarn start 