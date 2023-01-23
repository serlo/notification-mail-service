cd ../api.serlo.org
kill -9 "$(ps ax | grep tsdx | awk '{print $1}' | head -n 1)"
yarn stop:redis

cd ../database-layer
kill -9  $(ps ax | grep target/debug/server | awk '{print $1}' | head -n 1)
yarn down

cd ../local-dev-env
yarn stop

cd ../notification-mail-service
yarn stop